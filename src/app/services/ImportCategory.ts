import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';

interface IImportCategory {
    name: String;
    description: String;
}

class ImportCategory {

    constructor(private categoryRepository: ICategoriesRepository) { }

    loadCategories(file: Express.Multer.File):Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = []
            const parseFile = parse();
            console.log(file)
            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line
                    categories.push({
                        name,
                        description
                    })
                })
                .on("end", () => {
                    resolve(categories)
                })
                .on("error", err => {
                    reject(err)
                })
        })
    }

    async execute(file: Express.Multer.File):Promise<void> {
        const categories = await this.loadCategories(file)
        

        categories.map(async category => {
            const {name, description} = category;
            const existCategory  = this.categoryRepository.findByName(name);
            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }

}

export { ImportCategory }
import User from "../../model/User";

interface ICreateUserTDO {
    name: string;
    email: string;
    password: string;
    driver_license: string;
}

interface IUsersRepository {
    create(data: ICreateUserTDO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { ICreateUserTDO, IUsersRepository }
import { v4 as uuidv4 } from 'uuid';

class Specification {
    id?: String;
    name: String;
    description: String;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Specification }
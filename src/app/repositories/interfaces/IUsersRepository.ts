import User from "../../model/User";

interface ICreateUserTDO {
    name: String;
    email: String;
    password: String;
    driver_license: String;
}

interface IUsersRepository {
    create(data: ICreateUserTDO): Promise<void>;
    findByEmail(email: String): Promise<User>;
}

export { ICreateUserTDO, IUsersRepository }
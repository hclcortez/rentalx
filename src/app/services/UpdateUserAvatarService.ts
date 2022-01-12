import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

interface Irequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarService {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ user_id, avatar_file }: Irequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }

}

export default UpdateUserAvatarService
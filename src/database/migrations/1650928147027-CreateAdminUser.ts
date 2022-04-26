import { MigrationInterface, QueryRunner } from "typeorm"
import { User } from "../../entities/User"
import AppDataSource from "../dataSource"

export class CreateAdminUser1650928147027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User()
    user.email = "admin"
    user.password = "admin"
    user.hashPassword()
    user.role = "ADMIN"
    const userRepository = AppDataSource.manager.getRepository(User)
    await userRepository.save(user)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

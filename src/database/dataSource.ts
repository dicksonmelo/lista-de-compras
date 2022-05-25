import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

const {
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  TYPEORM_MIGRATIONS,
  TYPEORM_ENTITIES,
  TYPEORM_DATABASE_NAME,
  NODE_ENV,
} = process.env

const AppDataSource = new DataSource({
  name: TYPEORM_DATABASE_NAME,
  type: TYPEORM_CONNECTION as any,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT as unknown as number,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  migrations: [TYPEORM_MIGRATIONS],
  entities: [TYPEORM_ENTITIES],
  dropSchema: NODE_ENV === "test" ? true : false,
  synchronize: true,
})

export default AppDataSource

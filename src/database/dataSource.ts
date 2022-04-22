import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "1p@st",
  database: "shopping-list",
  migrations: ["src/database/migrations/*.ts"],
  entities: [__dirname + "/../entities/*.ts"],
  logging: true,
  synchronize: true,
})

export default AppDataSource

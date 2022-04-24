import { DataSource } from "typeorm"
import { Product } from "../entities/Product"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "1p@st",
  database: "shopping-list",
  migrations: ["src/database/migrations/*.ts"],
  entities: [Product],
  logging: true,
  synchronize: true,
})

export default AppDataSource

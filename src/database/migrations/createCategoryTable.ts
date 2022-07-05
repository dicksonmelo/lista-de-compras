import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createCategoryTable = async () => {
  const categoryTable = `
    CREATE TABLE IF NOT EXISTS category (
      id uuid DEFAULT uuid_generate_v4(),
      category_name VARCHAR(128) NOT NULL,
      PRIMARY KEY (id)
    )
    `

  const queryResponse = await query(categoryTable)

  return await handlePoolResponse(queryResponse)
}

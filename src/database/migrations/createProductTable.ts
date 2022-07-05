import { query } from "../db"
import handlePoolResponse from "../../utils/handlePoolResponse"

export const createProductTable = async () => {
  const productTable = `
    CREATE TABLE IF NOT EXISTS product (
      id uuid DEFAULT uuid_generate_v4(),
      product_name VARCHAR(128) NOT NULL,
      category_id uuid,
      PRIMARY KEY (id),
      CONSTRAINT fk_category
        FOREIGN KEY (category_id)
          REFERENCES category(id)
      )
    `

  const queryResponse = await query(productTable)

  return handlePoolResponse(queryResponse)
}



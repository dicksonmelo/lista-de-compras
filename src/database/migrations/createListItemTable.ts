import { QueryResult } from "pg"
import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createListItemTable = async () => {
  const listItemTable = `
    CREATE TABLE IF NOT EXISTS list_item (
      product_id uuid NOT NULL,
      list_id uuid NOT NULL,
      item_qtd INT,
      brand VARCHAR(40),
      CONSTRAINT fk_list
        FOREIGN KEY (list_id)
          REFERENCES list(id)
      )
    `

  const queryResponse = await query(listItemTable)

  return handlePoolResponse(queryResponse as unknown as QueryResult)
}

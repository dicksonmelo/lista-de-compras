import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createListTable = async () => {
  const createListTableFunc = `
    CREATE TABLE IF NOT EXISTS list (
      id uuid DEFAULT uuid_generate_v4(), 
      user_id uuid NOT NULL,
      list_name VARCHAR(128) NOT NULL,
      PRIMARY KEY (id),
      CONSTRAINT fk_user
        FOREIGN KEY(user_id)
          REFERENCES user_app(id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION
    )
    `

  const queryResponse = await query(createListTableFunc)

  return handlePoolResponse(queryResponse)
}

require("make-runnable")

import handlePoolResponse from "../../utils/handlePoolResponse"
import { query } from "../db"

export const createUserTable = async () => {
  const userTable = `
    CREATE TABLE IF NOT EXISTS user_app (
      id uuid DEFAULT uuid_generate_v4(),
      hash_password VARCHAR(255) NOT NULL,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      PRIMARY KEY (id)
    )
  `

  const queryResponse = await query(userTable)

  return await handlePoolResponse(queryResponse)
}

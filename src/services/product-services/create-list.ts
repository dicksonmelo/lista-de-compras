import lodash from "lodash"
import { pool } from "../../database/db"

type ListService = {
  user_id: string
  list_name: string
}

const createListService = async ({ user_id, list_name }: ListService) => {
  try {
    const createListResult = await pool.query(
      `INSERT INTO list
      (user_id, list_name)
      VALUES
      ('${user_id}', '${lodash.capitalize(list_name)}')e;`,
    )

    return createListResult
  } catch (e) {
    return e
  }
}

export default createListService

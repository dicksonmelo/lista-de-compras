import lodash from "lodash"
import { postAndGetData } from "../../utils/postAndGetData"

type ListService = {
  user_id: string
  list_name: string
}

const createListService = async ({ user_id, list_name }: ListService) => {
  try {
    return await postAndGetData(
      `
      INSERT INTO list
      (user_id, list_name)
      VALUES
      ('${user_id}', '${lodash.capitalize(list_name)}');
      `,
      "list",
    )
  } catch (e) {
    const err = new Error(e)
    return err
  }
}

export default createListService

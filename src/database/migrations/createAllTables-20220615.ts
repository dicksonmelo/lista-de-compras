import {
  createCategoryTable,
  createListItemTable,
  createListTable,
  createProductTable,
  createUserTable,
} from "."

export const createAllTables = async () => {
  try {
    return (
      await createUserTable(),
      await createCategoryTable(),
      await createListTable(),
      await createListItemTable(),
      await createProductTable()
    )
  } catch (e) {
    console.log(e)
  }
}

require("make-runnable/custom")({
  printOutputFrame: false
})

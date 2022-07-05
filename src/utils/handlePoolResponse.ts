import { QueryResult } from "pg"
import { pool } from "../database/db"

export default async (queryResponse: QueryResult) => {
  if (queryResponse instanceof Error) {
    await pool.end()
    return new Error(queryResponse.message)
  }

  return queryResponse
}

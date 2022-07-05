import { pool } from "../database/db"

export const postAndGetData = async (query: string, table) => {
  await pool.query(query)

  const response = await pool.query(
    `
  select * from ${table} l
  order by created_at desc
  limit 1;
  `,
  )

  return response.rows
}

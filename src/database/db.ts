import { Pool } from "pg"
import { QueryResult } from "pg"
import { config } from "../config/databaseConfig"

const pool = new Pool(config)

const query = async (text: string, params = []) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log(`Duration: ${duration}\nCommand: ${res.command}\nRows: ${res.rows}\n`)
  return res
}

export { query, pool }

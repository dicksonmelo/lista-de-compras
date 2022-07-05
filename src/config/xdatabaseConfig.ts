const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env

export const config = {
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: Number(PGPORT),
  max: 10,
  idleTimeoutMillis: 30000,
}

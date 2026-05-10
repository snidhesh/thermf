import { neon, Pool } from "@neondatabase/serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { drizzle as drizzleWs } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

/* ------------------------------------------------------------------ */
/*  HTTP client – lightweight, ideal for simple queries                */
/*  Lazily initialized to avoid connection during build                */
/* ------------------------------------------------------------------ */

let _db: ReturnType<typeof drizzleHttp> | null = null;

function getDb() {
  if (!_db) {
    const sql = neon(process.env.DATABASE_URL!);
    _db = drizzleHttp({ client: sql, schema });
  }
  return _db;
}

export const db = new Proxy({} as ReturnType<typeof drizzleHttp>, {
  get(_target, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/* ------------------------------------------------------------------ */
/*  WebSocket pool – required for transactions / SELECT FOR UPDATE     */
/*  Lazily initialized to avoid connection during build                */
/* ------------------------------------------------------------------ */

let _dbPool: ReturnType<typeof drizzleWs> | null = null;

function getDbPool() {
  if (!_dbPool) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
    _dbPool = drizzleWs({ client: pool, schema });
  }
  return _dbPool;
}

export const dbPool = new Proxy({} as ReturnType<typeof drizzleWs>, {
  get(_target, prop) {
    return (getDbPool() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/* ------------------------------------------------------------------ */
/*  Re-export schema for convenience                                   */
/* ------------------------------------------------------------------ */

export { schema };

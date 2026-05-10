import { config } from "dotenv";
config({ path: ".env.local" });

import "../src/db/seed";

// TODO: Implement background workers
// Sprint 3, Day 8-9

import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// TODO: Add cron jobs
// - Yield snapshot creation (every 5 min)
// - Price checking (daily at 6 AM)
// - Harvest execution check (every 15 min)
// - Old data cleanup (weekly)

export default crons;

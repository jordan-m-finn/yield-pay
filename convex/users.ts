// TODO: Implement user queries and mutations
// Sprint 3, Day 3-5
// See API.md for complete list

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    // TODO: Implement
    return null;
  },
});

export const createUser = mutation({
  args: {
    walletAddress: v.string(),
  },
  handler: async (ctx, args) => {
    // TODO: Implement
    return "user_id";
  },
});

// TODO: Add all other user queries and mutations

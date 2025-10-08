// TODO: Implement complete database schema
// Sprint 3, Day 1-2
// See DATABASE.md for full schema

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    walletAddress: v.string(),
    safeAddress: v.optional(v.string()),
    isActive: v.boolean(),
    automationEnabled: v.boolean(),
    hasCompletedOnboarding: v.boolean(),
    hasAcknowledgedRisks: v.boolean(),
    createdAt: v.number(),
    lastLoginAt: v.number(),
    lastActivityAt: v.number(),
  })
    .index("by_wallet", ["walletAddress"])
    .index("by_safe", ["safeAddress"])
    .index("by_active", ["isActive"]),

  // TODO: Add remaining tables
  // - userConfigs
  // - subscriptions
  // - userSubscriptions
  // - transactions
  // - yieldSnapshots
  // - notifications
  // - priceHistory
});

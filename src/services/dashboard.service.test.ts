import { describe, expect, it } from "vitest";

import { getDashboardMetrics } from "./dashboard.service";

describe("dashboard.service", () => {
  it("returns metrics for a known view", async () => {
    const metrics = await getDashboardMetrics("summary");
    expect(metrics.length).toBeGreaterThan(0);
    expect(metrics[0]).toHaveProperty("id");
  });
});

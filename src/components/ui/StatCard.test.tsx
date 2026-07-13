import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { StatCard } from "./StatCard";

describe("StatCard", () => {
  it("renders the metric label, value and unit", () => {
    render(
      <StatCard id="quality-score" label="Quality Score" value={92} unit="%" trend="up" />,
    );

    expect(screen.getByText("Quality Score")).toBeInTheDocument();
    expect(screen.getByText("92%")).toBeInTheDocument();
  });
});

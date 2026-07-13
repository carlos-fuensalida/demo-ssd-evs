"use client";

import { useEffect, useState } from "react";

import {
  type DashboardView,
  getDashboardMetrics,
} from "@/services/dashboard.service";
import type { DashboardMetric } from "@/types/dashboard";

interface UseDashboardDataResult {
  metrics: DashboardMetric[];
  isLoading: boolean;
}

export function useDashboardData(view: DashboardView): UseDashboardDataResult {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getDashboardMetrics(view).then((data) => {
      if (isMounted) {
        setMetrics(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [view]);

  return { metrics, isLoading };
}

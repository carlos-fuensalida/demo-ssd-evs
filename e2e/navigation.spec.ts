import { expect, test } from "@playwright/test";

test("can navigate between dashboard views", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/summary$/);
  await expect(page.getByRole("heading", { name: "Summary" })).toBeVisible();

  await page.getByRole("tab", { name: "Quality" }).click();
  await expect(page).toHaveURL(/\/quality$/);
  await expect(page.getByRole("heading", { name: "Quality" })).toBeVisible();
});

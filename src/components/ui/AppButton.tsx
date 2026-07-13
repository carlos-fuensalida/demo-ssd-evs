import Button, { type ButtonProps } from "@mui/material/Button";

/**
 * Variant wrapper, not a duplicate component per color — see
 * .specs/constitution.md Component Strategy ("Good: Button with variants
 * Primary/Secondary/Danger" vs "Bad: BlueButton/RedButton/GrayButton").
 */
export type AppButtonVariant = "primary" | "secondary" | "danger";

export interface AppButtonProps extends Omit<ButtonProps, "variant" | "color"> {
  variant?: AppButtonVariant;
}

const VARIANT_MAP: Record<
  AppButtonVariant,
  { variant: ButtonProps["variant"]; color: ButtonProps["color"] }
> = {
  primary: { variant: "contained", color: "primary" },
  secondary: { variant: "outlined", color: "primary" },
  danger: { variant: "contained", color: "error" },
};

export function AppButton({ variant = "primary", ...props }: AppButtonProps) {
  const { variant: muiVariant, color } = VARIANT_MAP[variant];
  return <Button variant={muiVariant} color={color} {...props} />;
}

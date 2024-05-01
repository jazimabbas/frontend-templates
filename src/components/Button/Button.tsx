import { PrimaryButton, SecondaryButton } from "./Client";

type Props = React.ComponentProps<typeof PrimaryButton> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", ...delegated }: Props) {
  if (variant === "primary") return <PrimaryButton {...delegated} />;
  return <SecondaryButton {...delegated} />;
}

import { Wrapper } from "./Client";

type Props = React.ComponentProps<typeof Wrapper> & { icon: any };

export function Icon({ icon, ...delegated }: Props) {
  return <Wrapper {...delegated}>{icon}</Wrapper>;
}

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { RiMenuLine } from "@remixicon/react";
import { Link } from "@/components/Link";

export default function HomePage() {
  return (
    <div style={{ margin: "10px" }}>
      <h1>Great Frontend Project</h1>
      <Button variant="primary">Back to Home</Button>
      <div style={{ margin: "20px 0" }}>
        <Icon icon={<RiMenuLine />} />
      </div>
      <div style={{ margin: "20px 0" }}>
        <Link>Features</Link>
      </div>
    </div>
  );
}

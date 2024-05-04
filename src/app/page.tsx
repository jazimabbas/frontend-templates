import { RiMenuLine } from "@remixicon/react";
import { Icon } from "@/components/Icon";
import { Link } from "@/components/Link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

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
      <div style={{ margin: "20px 0", maxWidth: "300px", width: "100%" }}>
        <Input
          id="email"
          label="Password"
          type="password"
          placeholder="Your Password .."
          hasError
        />
      </div>
    </div>
  );
}

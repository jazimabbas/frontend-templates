import { Metadata } from "next";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Badge size="lg" color="success">
          Label
        </Badge>
      </div>
    </div>
  );
}

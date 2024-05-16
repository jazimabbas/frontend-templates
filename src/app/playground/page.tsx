import { Metadata } from "next";
import { PasswordField } from "./PasswordInput";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <PasswordField />
        </div>
      </div>
    </>
  );
}

import { Metadata } from "next";
import { PasswordField } from "./PasswordInput";
import { Textarea } from "@/components/NewInput";

export const metadata: Metadata = {
  title: "Playground",
};

export default function ButtonPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <PasswordField />
          <Textarea id="message" label="Message" rows={5} showLen showHint />
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import { Input } from "@/components/Input";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

export function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      fullWidth={false}
      id="password"
      label="Password"
      type={showPassword ? "text" : "password"}
      rightIcon={showPassword ? RiEyeOffLine : RiEyeLine}
      rightIconProps={{ className: "pointer", onClick: () => setShowPassword(!showPassword) }}
    />
  );
}

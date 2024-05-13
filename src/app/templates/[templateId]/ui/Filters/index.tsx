"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { templates } from "@/data/templates";
import { SelectWrapper, Wrapper } from "./Client";

export function Filters({ templateId }: { templateId: string }) {
  const [filter] = useState(templateId);
  const router = useRouter();

  const handleChangeFilter = (e: SelectChangeEvent<string>) => {
    const filter = e.target.value;
    router.push("/templates/" + filter);
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <InputLabel htmlFor="templates-native-select">Select Template</InputLabel>
        <Select
          fullWidth
          defaultValue={filter}
          onChange={handleChangeFilter}
          label="Select Template"
          id="templates-native-select"
          native
        >
          <option aria-label="None" value="" />
          {templates.map((template) => (
            <optgroup key={template.section} label={template.section}>
              {template.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </SelectWrapper>
    </Wrapper>
  );
}

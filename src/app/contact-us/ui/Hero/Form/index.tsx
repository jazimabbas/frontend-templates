"use client";
import { useFormik } from "formik";
import { Button } from "@/components/Button";
import { Textarea, Input } from "@/components/Input";
import { Wrapper, FieldWrapper } from "./Client";
import { contactSchema, initValues } from "./validation";

export function ContactForm() {
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("formValues:", values);
      alert("Form Submitted");
      formik.resetForm();
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <FieldWrapper>
        <Input
          id="name"
          name="name"
          label="Name"
          placeholder="Your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          hasError={!!formik.errors.name}
          hintMessage={formik.errors.name}
          showHint={!!formik.errors.name && formik.touched.name}
        />
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="example@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          hasError={!!formik.errors.email}
          hintMessage={formik.errors.email}
          showHint={!!formik.errors.email && formik.touched.email}
        />
      </FieldWrapper>
      <Textarea
        sx={{ marginTop: "24px", marginBottom: "40px" }}
        id="message"
        label="Message"
        placeholder="Write your message..."
        showLen
        rows={5}
        maxLen={500}
        currentLen={formik.values.message.length}
        value={formik.values.message}
        onChange={formik.handleChange}
        hasError={!!formik.errors.message}
        hintMessage={formik.errors.message}
      />
      <Button type="submit" sx={{ width: "100%" }}>
        Submit
      </Button>
    </Wrapper>
  );
}

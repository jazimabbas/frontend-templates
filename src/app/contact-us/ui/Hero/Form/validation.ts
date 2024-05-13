import { object, string, type InferType } from "yup";

export const contactSchema = object().shape({
  name: string().required().label("Name"),
  email: string().email().required().label("Email"),
  message: string().required().label("Message"),
});

export type ContactFields = Required<InferType<typeof contactSchema>>;

export const initValues: ContactFields = {
  name: "",
  email: "",
  message: "",
};

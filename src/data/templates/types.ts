export type Category = {
  id: string;
  title: string;
  type: "page" | "component";
  height?: number;
  url: string;
  components: Category[];
};

export type Template = {
  section: string;
  categories: Category[];
};

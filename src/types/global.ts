export type PageProps<T extends Record<string, string>> = {
  params: Promise<T>;
};

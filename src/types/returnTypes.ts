export type AllDestinationsReturnType = {
  description: string | null;
  id: string;
  image_url: string;
  name: string;
  tags: [{ id?: string; tag: string }];
}[];

export type SingleDestinationReturnType = {
  description: string | null;
  id: string;
  image_url: string;
  name: string;
  tags: [{ id: string; tag: string }];
};

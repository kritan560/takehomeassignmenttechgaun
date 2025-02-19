/**
 * Represents the structure of data returned when fetching all destinations.
 * Each destination object contains a description, ID, image URL, name, and a list of tags.
 */
export type AllDestinationsReturnType = {
  description: string | null;
  id: string;
  image_url: string;
  name: string;
  tags: [{ id?: string; tag: string }];
}[];

/**
 * Represents the structure of data returned when fetching single destinations.
 * Each destination object contains a description, ID, image URL, name, and a list of tags.
 */
export type SingleDestinationReturnType = {
  description: string | null;
  id: string;
  image_url: string;
  name: string;
  tags: [{ id: string; tag: string }];
};

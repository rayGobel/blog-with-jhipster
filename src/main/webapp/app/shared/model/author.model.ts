export interface IAuthor {
  id?: number;
  name?: string | null;
  location?: string | null;
}

export const defaultValue: Readonly<IAuthor> = {};

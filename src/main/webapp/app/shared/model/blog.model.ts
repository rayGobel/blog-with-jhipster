import dayjs from 'dayjs';
import { IAuthor } from 'app/shared/model/author.model';

export interface IBlog {
  id?: number;
  title?: string | null;
  content?: string | null;
  publishDate?: string | null;
  viewCount?: number | null;
  author?: IAuthor | null;
}

export const defaultValue: Readonly<IBlog> = {};

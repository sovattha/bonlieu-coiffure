import {PortableTextBlock} from "sanity";

export type Horaire = {
  _id: string;
  createdAt: Date;
  dayOfWeek: string;
  content: PortableTextBlock[];
}
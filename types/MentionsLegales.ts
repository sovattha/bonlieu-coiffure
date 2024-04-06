import {PortableTextBlock} from "sanity";

export type MentionsLegales = {
  _id: string;
  createdAt: Date;
  content: PortableTextBlock[];
}
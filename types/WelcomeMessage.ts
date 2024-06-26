import {PortableTextBlock} from "sanity";

export type WelcomeMessage = {
  _id: string;
  createdAt: Date;
  content: PortableTextBlock[];
  message?: string;
}
import {createClient, groq} from "next-sanity";
import clientConfig from './config/client-config'
import {WelcomeMessage} from "@/types/WelcomeMessage";
import {Horaire} from "@/types/Horaire";
import {ForfaitFemme} from "@/types/ForfaitFemme";
import {ForfaitJeuneFille} from "@/types/ForfaitJeuneFille";
import {ForfaitHomme} from "@/types/ForfaitHomme";
import {MentionsLegales} from "@/types/MentionsLegales";
import { cache } from 'react'

function getSanityClient() {
  return createClient(clientConfig);
}

export async function getWelcomeMessage(): Promise<WelcomeMessage> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "welcome"][0] {
      _id,
      _createdAt,
      content,
      message
    }`,
    {}
  ))();
}
export async function getMentionsLegales(): Promise<MentionsLegales> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "mentions-legales"][0] {
      _id,
      _createdAt,
      content,
      message
    }`,
    {}
  ))();
}

export async function getHoraires(): Promise<Horaire[]> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "horaire"] | order(order asc) {
      _id,
      _createdAt,
      order,
      dayOfWeek,
      content
    }`,
    {}
  ))();
}

export async function getForfaitsFemme(): Promise<ForfaitFemme[]> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "forfaitFemme"] | order(order asc) {
      _id,
      _createdAt,
      order,
      name,
      price1,
      price2,
      price3,
      otherText
    }`,
    {}
  ))();
}

export async function getForfaitsJeuneFille(): Promise<ForfaitJeuneFille[]> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "forfaitJeuneFille"] | order(order asc) {
      _id,
      _createdAt,
      order,
      name,
      price
    }`,
    {}
  ))();
}

export async function getForfaitsHomme(): Promise<ForfaitHomme[]> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "forfaitHomme"] | order(order asc) {
      _id,
      _createdAt,
      order,
      name,
      price
    }`,
    {}
  ))();
}

export async function getForfaitsBarbe(): Promise<ForfaitHomme[]> {
  return cache(() => getSanityClient().fetch(
    groq`*[_type == "forfaitBarbe"] | order(order asc) {
      _id,
      _createdAt,
      order,
      name,
      price
    }`,
    {}
  ))();
}


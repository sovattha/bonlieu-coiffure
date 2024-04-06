import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";
import {getMentionsLegales} from "@/sanity/sanity-utils";
import {MentionsLegales} from "@/app/components/MentionsLegales";
import {MentionsLegales as MentionsLegalesType} from "@/types/MentionsLegales";

export default async function Page() {

  const mentionsLegales: MentionsLegalesType = await getMentionsLegales();

  return <>
      <MentionsLegales mentionsLegales={mentionsLegales.content} />
      <Footer/>
  </>

}

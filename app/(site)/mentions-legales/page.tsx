import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";
import {getHoraires, getMentionsLegales} from "@/sanity/sanity-utils";
import {MentionsLegales} from "@/app/components/MentionsLegales";
import {MentionsLegales as MentionsLegalesType} from "@/types/MentionsLegales";
import {Horaire} from "@/types/Horaire";

export default async function Page() {

  const mentionsLegales: MentionsLegalesType = await getMentionsLegales();
  const horaires: Horaire[] = await getHoraires();

  return <>
      <Header minimalHeader={true} />
      <MentionsLegales mentionsLegales={mentionsLegales.content} horaires={horaires} />
      <Footer/>
  </>

}

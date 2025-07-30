import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";
import {MainContent} from "@/app/components/MainContent";
import {
    getForfaitsBarbe,
    getForfaitsFemme,
    getForfaitsHomme,
    getForfaitsJeuneFille,
    getHoraires,
    getWelcomeMessage
} from "@/sanity/sanity-utils";
import {Horaire} from "@/types/Horaire";
import {ForfaitFemme} from "@/types/ForfaitFemme";
import {ForfaitHomme} from "@/types/ForfaitHomme";
import {ForfaitJeuneFille} from "@/types/ForfaitJeuneFille";
import {ForfaitBarbe} from "@/types/ForfaitBarbe";
import {WelcomeMessage} from "@/types/WelcomeMessage";

export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function Page() {

  const welcomeMessage: WelcomeMessage = await getWelcomeMessage();
  const horaires: Horaire[] = await getHoraires();
  const forfaitsFemme: ForfaitFemme[] = await getForfaitsFemme();
  const forfaitsJeuneFille: ForfaitJeuneFille[] = await getForfaitsJeuneFille();
  const forfaitsHomme: ForfaitHomme[] = await getForfaitsHomme();
  const forfaitsBarbe: ForfaitBarbe[] = await getForfaitsBarbe();

  return <>
      <Header content={welcomeMessage?.content} message={welcomeMessage?.message} />
      <MainContent
          horaires={horaires}
          forfaitsFemme={forfaitsFemme}
          forfaitsJeuneFille={forfaitsJeuneFille}
          forfaitsHomme={forfaitsHomme}
          forfaitsBarbe={forfaitsBarbe}
      />
      <Footer/>
  </>

}

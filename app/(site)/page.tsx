import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";
import {MainContent} from "@/app/components/MainContent";
import {getPages, getWelcomeMessage} from "@/sanity/sanity-utils";

export default async function Page() {

  const welcomeMessage = await getWelcomeMessage();

  return <>
      <Header content={welcomeMessage.content} message={welcomeMessage.message} />
      <MainContent />
      <Footer/>
  </>

}

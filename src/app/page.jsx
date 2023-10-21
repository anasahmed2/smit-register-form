import About from "./components/about/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import CardRender from "./components/cardRender/page";
import Timeline from "./components/timeline/page";
import Help from "./components/help/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CardRender/>
      <Timeline />
      <Help/>
    </>
  );
}

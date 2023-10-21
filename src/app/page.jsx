import About from "./components/about/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import CardRender from "./components/cardRender/page";
import Timeline from "./components/timeline/page";
import Help from "./components/help/page";

export default function Home() {
  return (
    <>
    <main className="w-ful h-auto bg-[#050816]">
      <Header />
      <Hero />
      <About />
      <CardRender/>
      <Timeline />
      <Help/>
      </main>
    </>
  );
}

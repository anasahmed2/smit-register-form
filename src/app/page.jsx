import About from "./components/about/page";
import Cards from "./components/cards/page";
import Contact from "./components/contact/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Timeline from "./components/timeline/page";
import { competitions } from "./utils/constants";

export default function Home() {
  return (
    <>
<main className="w-ful h-full bg-[https://pucon.vercel.app/assets/herobg-ecbfddc8.png]">
      <Header />
      <Hero />
      </main>
      <About />
      <main className="w-full h-fit flex justify-center p-10">
        <div className="container max-w-[980px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {competitions.map((v) => (
            <Cards key={v.name} href={v.href} name={v.name} cardImg={v.cardImg} />
          ))}
        </div>
      </main>
      <Timeline />
      <Contact />
    </>
  );
}

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <main className="overview w-full h-fit flex justify-center p-10 hero-bg mt-16">
      <div className="container flex flex-col items-center">
        <div data-aos="fade-right" data-aos-delay="100" className="flex flex-col items-center sm:block py-4 px-6 relative before:w-6 before:h-6 before:rounded-full before:bg-gradient-to-b before:to-[#00a2f4] before:from-[#f900fe] before:absolute before:top-3 before:-left-4 after:w-1.5 after:h-2/3 sm:after:h-2/4 after:absolute after:bg-gradient-to-t after:to-[#00a2f4] after:from-[#f900fe] after:top-8 after:-left-2 after:rounded-md">
          <h1 data-aos="fade-right" className="text-center sm:text-left text-4xl md:text-6xl text-white font-black">
            Welcome to <span className="text-[#874afe]">SMIT Con&apos;23</span>
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="100" className="text-white text-center sm:text-left text-lg md:text-xl font-medium mt-4">
            October 26th, 2023
          </h2>
          <h2 data-aos="fade-right" data-aos-delay="100" className="text-center text-white sm:text-left text-lg md:text-xl font-medium mt-1">
            Saylani Mass IT Training
          </h2>
          <Link href="#">
            <Button
               data-aos="fade-right" data-aos-delay="200"
              radius="sm"
              className="mt-7 md:px-6 md:py-6 !text-white text-sm md:text-base font-medium drop-shadow-xl bg-gradient-to-r to-[#00a2f4] from-[#f900fe] hover:scale-105"
            >
              Register now
            </Button>
          </Link>
          <Image
             data-aos="fade-left" data-aos-delay="150"
            src="/assets/hero-img.png"
            className="ms-auto mt-6 sm:-mt-10 md:-mt-20 w-60 md:w-96 hidden sm:block"
            width={380}
            height={380}
            priority
            alt="hero image"
          />
        </div>
      </div>
    </main>
  );
}

"use client";

import Header from "@/app/components/header/page";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { competitions } from "@/app/utils/constants";

export default function page(props) {
  return (
    <>
      <Header page={"comp"} />
      {competitions.map(
        (v, i) =>
          v.href === props.params.comp && (
            <main
              key={`${v.name} ${i}`}
              className="overview w-full h-fit flex justify-center p-10 mt-16"
            >
              <div className="container flex flex-col items-center">
                <div className="flex flex-col items-center py-4 px-6">
                  <h1 data-aos="fade" className="text-center sm:text-left text-4xl md:text-6xl font-black relative after:absolute after:w-full after:h-2 after:-bottom-5 after:bg-gradient-to-r after:to-green-500 after:from-blue-500 after:left-0">
                    {v.name}
                  </h1>
                </div>
                <div className="flex flex-col mt-32">
                  <h1 data-aos="fade" className="font-medium sm:text-4xl mb-4 text-2xl tracking-wider">
                    Introduction
                  </h1>
                  <p data-aos="fade" className=" text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    {v.pageInfo.intro}
                  </p>
                  <h1 data-aos="fade" className="font-medium sm:text-4xl mt-10 mb-4 text-2xl tracking-wider">
                    Rules
                  </h1>
                  <ul className="text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    {v.pageInfo.rules.map((v, i) => (
                      <li data-aos="fade" className="list-disc ms-5" key={`rule ${i}`}>
                        {v}
                      </li>
                    ))}
                  </ul>
                  <h1 data-aos="fade" className="font-medium sm:text-4xl mt-10 mb-4 text-2xl tracking-wider">
                    Registration
                  </h1>
                  <ul className="text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    {v.pageInfo.registration.map((v, i) => (
                      <li data-aos="fade" className="list-disc ms-5" key={`registration ${i}`}>
                        {v}
                      </li>
                    ))}
                  </ul>
                  {v.pageInfo.eval && (
                    <h1 data-aos="fade" className="font-medium sm:text-4xl mt-10 mb-4 text-2xl tracking-wider">
                      Evaluations
                    </h1>
                  )}
                  <ul className="text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    {v.pageInfo?.eval?.map((v, i) => (
                      <li data-aos="fade" className="list-disc ms-5" key={`eval ${i}`}>
                        {v}
                      </li>
                    ))}
                  </ul>
                  <h1 data-aos="fade" className="font-medium sm:text-4xl mt-10 mb-4 text-2xl tracking-wider">
                    Date and Time
                  </h1>
                  <p data-aos="fade" className=" text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    {v.pageInfo.dateTime}
                  </p>
                  <h1 data-aos="fade" className="font-medium sm:text-4xl mt-10 mb-4 text-2xl tracking-wider">
                    Event Prize Pool
                  </h1>
                  <ul className="text-gray-600 text-base sm:text-[17px] max-w-5xl leading-[30px]">
                    <li data-aos="fade" className="list-disc ms-5">
                      First Prize{" "}
                      <span className="font-bold">
                        {v.pageInfo.Prize.first}
                      </span>
                    </li>
                    <li data-aos="fade" className="list-disc ms-5">
                      Second Prize{" "}
                      <span className="font-bold">
                        {v.pageInfo.Prize.second}
                      </span>
                    </li>
                    {v.pageInfo.Prize.third && (
                      <li data-aos="fade" className="list-disc ms-5">
                        Third Prize{" "}
                        <span className="font-bold">
                          {v.pageInfo.Prize.third}
                        </span>
                      </li>
                    )}
                  </ul>
                  <Link href="#">
                    <Button
                      data-aos="fade"
                      radius="sm"
                      className="mt-8 md:px-8 md:py-8 !text-white text-base md:text-lg font-medium drop-shadow-xl bg-gradient-to-r to-blue-400 from-green-400"
                    >
                      Register now
                    </Button>
                  </Link>
                </div>
              </div>
            </main>
          )
      )}
    </>
  );
}

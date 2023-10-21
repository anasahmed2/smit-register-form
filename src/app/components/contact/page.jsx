import Link from 'next/link';
import { Button } from '@nextui-org/button';

export default function Contact() {
  return (
    <main id="help" data-aos="zoom-in" className="w-full h-fit flex justify-center p-10">
      <div className="container flex justify-center">
        <div className="w-full max-w-[980px] p-8 bg-[#100d25] rounded-2xl shadow-2xl">
          <div className="flex flex-col">
            <p
              data-aos="fade"
              className="sm:text-[18px] text-[14px] text-gray-600 uppercase tracking-wider"
            >
              FELL FREE TO ASK ANY QUESTION
            </p>
            <h1
              data-aos="fade"
              className="font-black md:text-[60px] sm:text-[50px] xs:text-[28px] text-[30px]"
            >
              Contact.
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
            data-aos="fade"
              className="w-full bg-[#151030] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-[#915EFF] border-1 border-gray-600 transition-[all_0.4s_ease-in-out]"
              type="text"
              placeholder="First Name*"
            />
            <input
            data-aos="fade"
              className="w-full bg-[#151030] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-[#915EFF] border-1 border-gray-600 transition-[all_0.4s_ease-in-out]"
              type="text"
              placeholder="Last Name*"
            />
          </div>
            <input
            data-aos="fade"
              className="w-full col-span-2 bg-[#151030] text-white mt-7 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-[#915EFF] border-1 border-gray-600 transition-[all_0.4s_ease-in-out]"
              type="email"
              placeholder="Email*"
            />
          <div className="my-4">
            <textarea
            data-aos="fade"
              placeholder="Message*"
              className="w-full h-32 bg-[#151030] text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-[#915EFF] border-1 border-gray-600 transition-[all_0.4s_ease-in-out]"
            ></textarea>
          </div>
          <div className="my-2 w-full lg:w-1/4">
            <Link href="#">
              <Button
            data-aos="fade"
                radius="sm"
                className="w-full mt-7 px-6 py-6 !text-white text-base font-medium drop-shadow-xl bg-gradient-to-r to-[#00a2f4] from-[#f900fe] hover:scale-105"
              >
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

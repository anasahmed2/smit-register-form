import Image from "next/image";
import Link from 'next/link';

export default function Cards({href, name, cardImg}) {
    return (
        <Link data-aos="zoom-in" href={`/competitions/${href}`} className="w-full max-w-[320px] h-[243px] rounded-[20px] shadow !bg-gradient-to-t from-blue-400 to-pink-500 hover:!scale-105 transition-[all_0.4s_ease-in-out] cursor-pointer p-[2px]">
        <div className="w-full h-full flex flex-col items-center p-10 gap-8 rounded-[20px] bg-[#151030]">
          <Image
            src={cardImg}
            width={75}
            height={75}
            alt="cards image"
          />
          <h5 className="text-xl font-bold text-center">
            {name}
          </h5>
        </div>
      </Link>
  );
}

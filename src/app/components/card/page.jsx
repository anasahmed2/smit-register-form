"use client"
import './style.css'
import Link from "next/link";


function Card({ name ,href ,cardImg }) {
    console.log(href)
    return (
        <>
   {/* <Link href="/competitions/web"> */}
            <div data-aos="fade" className=" w-full max-w-[350px] flex-col rounded-[20px] transition-transform duration-[.2s] ease-in-out hover:scale-[2] bg-gradient-to-r to-blue-400 from-green-400 text-white p-[2px] m-[10px] rounded-[20px]" style={{background:'-webkit-linear-gradient(-90.13deg,#00a2f4 1.9%,#f900fe 97.5%)'}} >
                <div className="w-full max-w-[350px] flex-col text-center pt-[50px] pb-[50px] p-[20px] h-auto flex  justify-center items-center rounded-[20px] transition-transform duration-[.2s] ease-in-out cursor-pointer" style={{backgroundColor:'#151030'}} >
                    <div className="w-full h-auto pb-[50px] flex justify-center aglin-center" >
                        <img
                            src={cardImg}
                            alt="My Image"
                            className="w-[64px] h-[64px]"
                        />
                    </div>
                    <div className="w-full h-auto">
                        <h2 className="font-bold" style={{ margin: "0 auto", fontSize: "1.3rem", letterSpacing: "-0.03rem" }}>{name}</h2   >
                    </div>
              </div>
            </div>
   {/* </Link> */}
            
        </>
    )
}

export{Card};
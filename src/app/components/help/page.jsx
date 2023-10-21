"use client"
import { InputComp, TextAreaComp } from "../input/page";
import { Button } from "@nextui-org/button";

function Help() {
    return (
        <>
            <main className="w-full max-w-[1200px] h-auto mt-[10px] mb-[10px]  rounded-[10px]" id="help" >
                <div className="w-full h-auto p-[24px] mt-[7px] mb-[7px]" >
                    <p className="ml-[20px] sm:text-[18px] text-[14px] tracking-wider text-gray-600 " >FELL FREE TO ASK ANY QUESTION</p>
                    <h1 className="ml-[20px] text-black font-black md:text-[60px] sm:text-[50px] xs:text-[28px] text-[30px]">Contact.</h1>
                    <div className="w-ful h-auto mt-[7px] mb-[7px] flex">
                        <div className="w-[50%] h-auto">
                            <InputComp name="First Name" placeholder="What's your first name ?" type="text" />
                        </div>
                        <div className="w-[50%] h-auto">
                            <InputComp name="Last Name" placeholder="What's your last name ?" type="text" />
                        </div>
                    </div>
                    <div className="w-ful h-auto mt-[7px] mb-[7px]">
                        <InputComp name="Email" type="text" placeholder="What's your website address ?"/>
                    </div>
                    <div className="w-ful h-auto mt-[7px] mb-[7px]">
                        <TextAreaComp name="Your Massage" placeholder="What you want to say ?" />
                    </div>
                    <div className="w-ful h-auto ml-[20px] mt-[7px] mb-[7px]">
                        <Button
                            radius="sm"
                            className="w-[300px] mt-7 md:px-6 md:py-6 !text-white text-sm md:text-base font-medium drop-shadow-xl bg-gradient-to-r to-blue-400 from-green-400"
                        >
                            Register now
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Help;
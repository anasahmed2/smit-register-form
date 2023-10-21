'use client'
import { Card } from "../card/page";
import { competitions } from "@/app/utils/constants";
function CardRender() {

    return (
        <>
            <main className="w-ful h-auto flex justify-center items-center flex-wrap">
                {competitions.map((value, index) => <Card key={index} {...value} />)}
            </main>
        </>
    )
}

export default CardRender;
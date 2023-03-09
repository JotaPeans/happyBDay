import React from "react";

interface ICard {
    children: React.ReactNode,
    hard: boolean
}

const Card = ({ children, hard }: ICard) => {
    return (
        <div className={`p-10 w-96 h-96 flex flex-col gap-5 justify-around items-center rounded-3xl ${hard ? "bg-white/90" : "bg-white/70"} border-[3px] border-black shadow-hard`}>
            { children }
        </div>
    );
}
 
export default Card;
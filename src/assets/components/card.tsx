import React from "react";

interface ICard {
    children: React.ReactNode
}

const Card = ({ children }: ICard) => {
    return (
        <div className="p-10 w-96 h-96 flex flex-col gap-5 justify-around items-center rounded-3xl bg-white/70 border-[3px] border-black shadow-hard">
            { children }
        </div>
    );
}
 
export default Card;
import React from "react";

interface IButton {
    label: string,
    color: "green" | "red",
    setPage: () => void,
    disabled: boolean
}

const Button = ({ label, color, setPage, disabled=false }: IButton) => {
    return (
        <button disabled={disabled} onClick={setPage} className={`py-2 px-4 ${color === "green" ? "bg-green-500" : "bg-red-600"} ${disabled ? "opacity-50" : color === "green" ? "hover:bg-green-600 active:bg-green-700" : "hover:bg-red-700 active:bg-red-800"} text-white font-bold rounded-lg shadow-medium_hard border-[3px] border-black ${!disabled ? "active:translate-x-1 active:translate-y-1 active:shadow-none": ""} select-none`}>
            { label }
        </button>
    );
}
 
export default Button;
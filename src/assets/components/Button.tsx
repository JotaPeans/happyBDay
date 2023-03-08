interface IButton {
    label: string,
    color: "green" | "red"
}

const Button = ({ label, color }: IButton) => {
    return (
        <button className={`py-2 px-4 ${color === "green" ? "bg-green-500 hover:bg-green-600 active:bg-green-700" : "bg-red-600 hover:bg-red-700 active:bg-red-800"} text-white font-bold rounded-lg shadow-medium_hard border-[3px] border-black active:translate-x-1 active:translate-y-1 active:shadow-none select-none`}>
            { label }
        </button>
    );
}
 
export default Button;
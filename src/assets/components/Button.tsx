interface IButton {
    label: string
}

const Button = ({ label }: IButton) => {
    return (
        <button className="p-2 bg-green-500 text-white font-bold rounded-lg shadow-medium_hard border-[3px] border-black hover:bg-green-600 active:translate-x-1 active:translate-y-1 active:shadow-none active:bg-green-700 select-none">
            { label }
        </button>
    );
}
 
export default Button;
import Button from "./assets/components/Button";
import Card from "./assets/components/card";

const App = () => {
    return (
        <main className=" w-screen h-screen flex justify-center items-center font-medium font-cursive bg-gradient-to-tl from-[#FF8DC0]">
            <Card>
                <h1 className="font-bold text-2xl">Olá Julia</h1>
                <p className=" text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Button label="Próximo"/>
            </Card>
        </main>
    );
}
 
export default App;
import { useState } from "react";
import Button from "./assets/components/Button";
import Card from "./assets/components/card";
import arrayMessages from "./assets/messages.json";
import ParticleCanvas from "./assets/components/ParticleCanvas";

const App = () => {
    const [page, setPage] = useState(0);

    if(page > arrayMessages.messages.length) {
        setPage(page - 1);
    }
    else if(page < 0) {
        setPage(page + 1);
    }

    return (
        <>
            {page === arrayMessages.messages.length ? (
                <ParticleCanvas/>
            ) : ""}

            <main className={`relative w-screen h-screen flex justify-center items-center font-medium font-cursive ${!(page === arrayMessages.messages.length) && "bg-gradient-to-tl from-[#FF8DC0]"} select-none`}>
                {page === 0 && <Card hard={page === arrayMessages.messages.length}>
                    <h1 className="font-bold text-2xl">Olá Julia</h1>
                    <p className=" text-justify">
                        Mooooo, feliz aniversarioooooo. Meu Deus, eu não imaginava, quando te conheci, que a gente construiria algo tão bonito. Você é uma pessoa simplesmente incrível e eu te acho perfeita em todos os sentidos.
                    </p>
                    <div className="flex gap-10 w-full justify-center items-center">
                        <Button disabled={page === 0} setPage={() => setPage(page - 1)} color="red" label="Voltar"/>
                        <Button disabled={page === arrayMessages.messages.length} setPage={() => setPage(page + 1)} color="green" label="Próximo"/>
                    </div>
                </Card>} 
                {arrayMessages.messages.map((item, index) => {
                    if(index + 1 === page) {
                        return (
                            <Card hard={page === arrayMessages.messages.length} key={index}>
                                <p className=" text-justify">{item}</p>
                                <div className="flex gap-10 w-full justify-center items-center">
                                    <Button disabled={page === 0} setPage={() => setPage(page - 1)} color="red" label="Voltar"/>
                                    <Button disabled={page === arrayMessages.messages.length} setPage={() => setPage(page + 1)} color="green" label="Próximo"/>
                                </div>
                            </Card>
                        )
                    }
                })}
            </main>
        </>
    );
}
 
export default App;
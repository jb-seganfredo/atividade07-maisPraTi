import { useState, useEffect } from "react";

function BackgroundChanger() {
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    const randomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <div className="bg-slate-500 text-slate-50 p-4 my-6">  
            <h2 className="text-2xl font-bold text-center m-5">Background Changer</h2>
            <div className="flex justify-center">
                <button className="bg-sky-800 text-slate-50 py-2 px-6 font-bold rounded hover:opacity-70" onClick={randomColor}>Change Background</button>
            </div>
        </div>
    );
}

export default BackgroundChanger;
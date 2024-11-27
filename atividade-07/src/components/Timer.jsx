import { useState, useEffect } from "react";

function Timer() {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const handlePause = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setTime(0);
        setIsActive(false);
    };

    return (
        <div className="bg-slate-500 text-slate-50 p-4 my-6">
            <h2 className="text-4xl font-bold text-center m-5">Timer</h2>
            <div className="flex justify-center">
                <h2 className=" py-10 px-16 text-5x1 border-4 border-slate-600 rounded flex justify-center items-center text-5xl m-3" > {time}</h2>
            </div>
            <div>
                <button className="bg-sky-800 text-slate-50 p-2 rounded hover:opacity-70" onClick={handlePause}>
                    {isActive ? "Pause" : "Resume"}
                </button>
                <button className="bg-red-700 text-slate-50 rounded p-2 ml-2 hover:bg-red-600" onClick={handleReset}> Reset </button>
            </div>
        </div>
    );
}

export default Timer;
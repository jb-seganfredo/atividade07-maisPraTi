import { useState, useEffect } from "react";

function SpecialTimer() {
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(true);
    const [isInputVisible, setIsInputVisible] = useState(true);

    useEffect(() => {
        if (!paused && time > 0) {
            const interval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [paused, time]);

    useEffect(() => {
        if (time === 0 && !paused) {
            alert("Time's up!");
            setPaused(true);
            setIsInputVisible(true);
        }
    }, [time, paused]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setTime(value === "" ? 0 : parseInt(value, 10));
        }
    };

    const handleReset = () => {
        setTime(0);
        setPaused(true);
        setIsInputVisible(true);
    };

    return (
        <div className="flex flex-col items-center bg-slate-500 mt-6 p-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Special Timer</h1>
            <div className="flex items-center space-x-4 rounded font-semibold">
                <button
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                    onClick={() => {
                        if (time > 0) {
                            setPaused(!paused);
                            setIsInputVisible(false);
                        }
                    }}
                    disabled={time === 0}
                >
                    {paused ? "Start" : "Pause"}
                </button>
                <button
                    className="bg-red-700 text-white px-4 py-2 rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            {isInputVisible ? (
                <input
                    type="text"
                    value={time}
                    onChange={handleInputChange}
                    placeholder="Enter time in seconds"
                    className=" border-gray-400 rounded px-2 py-2 mt-4" 
                />
            ) : (
                <p className="mt-4 text-3xl border-2 p-6 rounded-full text-white ">Time: <br></br> {time}s</p>
            )}
        </div>
    );
}

export default SpecialTimer;

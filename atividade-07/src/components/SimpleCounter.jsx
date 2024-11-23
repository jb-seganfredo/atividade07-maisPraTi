import { useState } from "react";

function SimpleCounter() {

    const [count, setCount] = useState(0);

    if (count < 0) {
        setCount(0);
    }


    return (
        <div className="bg-slate-500 text-slate-50">
            <h2 className="text-2xl font-bold text-center m-5">Simple Counter</h2>
            <div className="flex justify-center">
                <h2 className=" py-10 px-16 text-5x1 border-4 border-slate-600 rounded flex justify-center items-center text-5xl m-3" > {count}</h2>
            </div>
            <div className="flex justify-center gap-5">
                <button className="bg-sky-800 text-slate-50 py-4 px-6 font-bold rounded hover:opacity-70" onClick={() => setCount(count - 1)}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>

                </button>
                <button className="bg-sky-800 text-slate-50 py-2 px-6 font-bold rounded hover:opacity-70" onClick={() => setCount(count + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>

            <button className="bg-red-700 text-slate-50 py-2 px-4 font-bold rounded m-2 hover:bg-red-600" onClick={() => setCount(0)}> Reset </button>
        </div>
    );
}

export default SimpleCounter;
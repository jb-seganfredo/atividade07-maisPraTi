import { useState } from "react";

function ChoresList() {
    const [chores, setChores] = useState([]);
    const [newChore, setNewChore] = useState("");

    const handleAddChore = () => {
        if (newChore.trim()) {
            setChores([...chores, { name: newChore, completed: false }]);
            setNewChore("");
        }
    };

    const handleToggleChore = (index) => {
        const updatedChores = chores.map((chore, i) =>
            i === index ? { ...chore, completed: !chore.completed } : chore
        );
        setChores(updatedChores);
    };

    const handleRemoveChore = (index) => {
        const updatedChores = chores.filter((_, i) => i !== index);
        setChores(updatedChores);
    };

    return (
        <div className="bg-slate-500 my-6 p-5">
            <h2 className="text-2xl font-bold text-center m-5 text-slate-50">
                Chores List
            </h2>

            <div className="flex justify-center mb-5">
                <input
                    type="text"
                    className="py-2 px-4 border-2 border-slate-600 rounded mr-2"
                    placeholder="Add a new chore"
                    value={newChore}
                    onChange={(e) => setNewChore(e.target.value)}
                />
                <button
                    className="bg-sky-800 text-slate-50 py-2 px-6 font-bold rounded hover:opacity-70"
                    onClick={handleAddChore}
                >
                    Add Chore
                </button>
            </div>

            <ul className="m-5">
                {chores.map((chore, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center m-2 bg-white p-3 rounded shadow"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={chore.completed}
                                onChange={() => handleToggleChore(index)}
                                className="mr-3"
                            />
                            <span
                                style={{
                                    textDecoration: chore.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {chore.name}
                            </span>
                        </div>
                        <button
                            className="bg-red-700 text-slate-50 py-2 px-4 font-bold rounded hover:bg-red-600"
                            onClick={() => handleRemoveChore(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChoresList;

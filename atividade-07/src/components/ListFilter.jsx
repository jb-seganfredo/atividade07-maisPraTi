import { useState } from "react";

function ListFilter() {

    const [names] = useState([
        "Ana",
        "Bruno",
        "Carla",
        "Diego",
        "Eduarda",
        "Fernando",
        "Gabriela",
        "Henrique",
        "Isabela",
        "João",
        "Karen",
        "Lucas",
        "Mariana",
        "Natália",
        "Otávio",
        "Paula",
        "Quintino",
    ]);
    const [filter, setFilter] = useState("");

    return (
        <div className="bg-slate-500 p-4 mt-6">
            <h2 className="text-2xl font-bold text-center m-5 text-slate-50">List Filter</h2>
            <input
                type="text"
                className="py-2 px-4 border-2 border-slate-600 rounded mr-2"
                placeholder="Filter names"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="m-5 text-slate-50">
                {names
                    .filter((name) =>
                        name.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((name, index) => (
                        <li key={index} className="m-2">{name}</li>
                    ))}
            </ul>
        </div>
    );
}

export default ListFilter;
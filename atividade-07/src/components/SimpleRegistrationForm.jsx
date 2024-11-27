import { useState } from "react";
import Welcome from "./Welcome";

function SimpleForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);  
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (name && email && password) {  
            setSubmitted(true);  
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <div className="bg-slate-500 p-4 my-6">
            <h2 className="text-4xl font-bold text-center m-5 text-white">Register</h2>
            <div className="flex justify-center">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="py-2 px-4 border-2 border-slate-600 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="py-2 px-4 border-2 border-slate-600 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="py-2 px-4 border-2 border-slate-600 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-sky-800 text-slate-50 py-2 px-6 font-bold rounded hover:opacity-70"
                    >
                        Register
                    </button>
                </form>
            </div>

            {submitted && <Welcome name={name} email={email} />}
        </div>
    );
}

export default SimpleForm;

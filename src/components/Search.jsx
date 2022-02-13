import { useState } from "react";

function Search({cb}) {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input 
                type="search"
                id="search-field"
                placeholder="search"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
                value={value}
                 />
                <button className="btn" onClick={handleSubmit} style={{position: "absolute", right: 0, top: 0}}> Search</button>
            </div>
        </div>
    )
}

export {Search};
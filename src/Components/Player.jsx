import { useState } from "react";

export default function Player({ initName, symbol, isActive, onNameChange }) {
    const [ editStatus, setEditStatus ] = useState(false);
    const [ name, setName ] = useState(initName)

    function handleEdit() {
        setEditStatus( editStatus => !editStatus );
        if (editStatus)
          onNameChange(symbol, name);
    }

    function handleChange(event) {
        console.log(event);
        setName(event.target.value);
    }

    return(
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {editStatus ? ( 
                <input type="text" required defaultValue={name} onChange={handleChange} />
              ):(
              <span className="player-name">{name}</span>)}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button
                onClick={handleEdit}
            >{editStatus ? "Save" : "Edit"}</button>
          </li>
    );
}
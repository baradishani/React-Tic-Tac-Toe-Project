import { useState } from "react";

export default function Player({ initName, symbol }) {
    const [ editStatus, setEditStatus ] = useState(false);
    const [ name, setName ] = useState(initName)

    function handleEdit() {
        setEditStatus( editStatus => !editStatus );
    }

    function handleChange(event) {
        console.log(event);
        setName(event.target.value);
    }

    return(
        <li>
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
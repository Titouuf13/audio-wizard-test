import { IdentityContext } from './MainApp'
import React, { useContext } from "react";

export default function Identity() {
    
    const { prenom, nom } = useContext(IdentityContext);
    const { setPrenom, setNom } = useContext(IdentityContext);

    return (
    <form>
        <label>
            Prénom:
            <input
                type="text"
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
            />
        </label>
        <label>
            Nom:
            <input
                type="text"
                value={nom}
                onChange={e => setNom(e.target.value)}
            />
        </label>
    </form>
    );
}
import React, { useState, createContext } from "react";
import ToggleButtonGroupControlled from './Sexe';
import Identity from './Identity';

export const SexContext = createContext();
export const IdentityContext = createContext();

export default function MainApp() {
    
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [step, setStep] = useState(0);
    const [sexe, setSexe] = useState(1);

    const handleChange = val => setSexe(val);

    if (step == 0) {
        return (
            <div>
                <div><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                <div>Peux-tu identifier l'identité du patient ?</div>
                <div>
                    <IdentityContext.Provider value={{ prenom, nom, setPrenom, setNom, step, setStep }}>
                        <Identity/>
                    </IdentityContext.Provider>
                    <br/>
                    <input type="submit" value="Valider" onClick={() => setStep(step + 1)}/>
                </div>
            </div>
        );
    } else if (step == 1)
        return (
            <div>
                <div><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                <div>Peux-tu indiquer son sexe ?</div>
                <div>
                    <SexContext.Provider value={{ sexe, handleChange }}>
                        <ToggleButtonGroupControlled/>
                    </SexContext.Provider>
                </div>
                <br/>
                <input type="submit" value="Valider" onClick={() => setStep(step + 1)}/>
            </div>
        );
    else if (step == 2) {
        if (sexe == 1) {
            return (
                <div>
                    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    <div>Monsieur {prenom} {nom}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                    <div>Madame {prenom} {nom}</div>
                </div>
            );
        };
    };
};
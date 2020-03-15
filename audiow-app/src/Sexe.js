import React, { useContext } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { SexContext } from './MainApp';

export default function ToggleButtonGroupControlled() {

    const { handleChange } = useContext(SexContext);
    const { sexe } = useContext(SexContext);

    return (
    <div>
        <br/><br/>
        <ToggleButtonGroup type="radio" value={sexe} onChange={handleChange} name="sexe">
          <ToggleButton value={1}>Homme</ToggleButton>
          <ToggleButton value={2}>Femme</ToggleButton>
        </ToggleButtonGroup>
    </div>
    );
}
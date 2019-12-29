import React from 'react';
import { SwatchesPicker } from 'react-color';

function ColorComponent(props) {
    return (
        <SwatchesPicker onChange={props.handleChange} />
    )
}

export default ColorComponent;
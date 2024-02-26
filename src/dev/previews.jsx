import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CustomButton from "../button.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CustomButton">
                <CustomButton/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
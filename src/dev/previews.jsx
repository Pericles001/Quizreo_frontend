import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {Login} from "../components";
import {Sidebar} from "../components/Sidebar/Sidebar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
            <ComponentPreview path="/Sidebar">
                <Sidebar/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;

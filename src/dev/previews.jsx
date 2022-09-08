import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {Login, Trial} from "../components";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Survey} from "../components/Forms/Survey/Survey";

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
            <ComponentPreview path="/Trial">
                <Trial/>
            </ComponentPreview>
            <ComponentPreview path="/Survey">
                <Survey/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;

import React from 'react';
// Components
import EditorMenu from '../components/EditorMenu.js';
import Itinerary from '../components/Itinerary.js';
// Material UI
import {
    Container
} from '@material-ui/core';

export default function ItineraryEditor() {


    return (
        <Container fixed>
            <EditorMenu />
            <Itinerary />
        </Container>
    );
}
import React from 'react';
// Components
import EditorMenu from '../components/EditorMenu.js';
import Itinerary from '../components/Itinerary.js';
// Material UI
import {
    Container,
    Grid
} from '@material-ui/core';

export default function ItineraryEditor() {


    return (
        <Container fixed>
            <h1>Itinerary Editor</h1>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <EditorMenu />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Itinerary />
                </Grid>
            </Grid>
        </Container>
    );
}
import React from 'react';
// Components
import Navbar from '../components/Navbar.js';
// Material UI
import {
    Button,
    Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function ItineraryEditor() {
    return (
        <>
            <Navbar />
            <Container fixed>
                
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => {
                        
                    }}>Add New Itinerary Item</Button>
            </Container>
        </>
    );
}
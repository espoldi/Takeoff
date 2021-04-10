import React from 'react';
// Material UI
import {
    Button,
    Container
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function ItineraryEditor() {
    return (
        <Container fixed>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddIcon />}
                onClick={() => {

                }}>Add New Itinerary Item</Button>
        </Container>
    );
}
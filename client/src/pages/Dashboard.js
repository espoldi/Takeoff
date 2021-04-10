import React from 'react';
// Components
import Current from '../components/Current.js';
import Archive from '../components/Archive.js';
// Material UI
import { Container } from '@material-ui/core';


export default function Dashboard() {
    return (
            <Container fixed>
                <Current />
                <Archive />
            </Container>
    );
}

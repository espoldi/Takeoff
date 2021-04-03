import React from 'react';
// Components
import Navbar from '../components/Navbar.js';
import Current from '../components/Current.js';
import Archive from '../components/Archive.js';
// Material UI
import { Container } from '@material-ui/core';

function Dashboard() {
    return (
        <>
            <Navbar />
            <Container fixed>
                <Current />
                <Archive />
            </Container>
        </>
    );
}

export default Dashboard;
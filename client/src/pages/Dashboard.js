import React from 'react';
// Components
import Navbar from '../components/Navbar.js';
import Current from '../components/Current.js';
import Archive from '../components/Archive.js';


function Dashboard() {
    return (
        <>
            <Navbar />
            <Current />
            <Archive />
           
        </>
    );
}

export default Dashboard;
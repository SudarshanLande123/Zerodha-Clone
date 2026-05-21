import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( 
        <>
      
        <Hero/>
        <CreateTicket/>
        <OpenAccount/>

        </>
     );
}

export default SupportPage;
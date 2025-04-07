import React from 'react';
import Header from '../components/buyticket/BuyTicketHeader'
import MovieCard from '../components/buyticket/MovieCard';
import TicketToolbar from '../components/buyticket/TicketToolbar';

function BuyTicket() {
    return (
    <div className="buyTicket">
        <Header />
        <TicketToolbar />
        <MovieCard />
    </div>
    );
}  

export default BuyTicket;

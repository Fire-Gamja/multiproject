import React from 'react';
import '../../styles/BuyTicket.css';

const dummyMovies = [
    {
      id: 1,
      title: '극장판 귀멸의 칼날: 무한열차편',
      time: '14:30',
      seats: '48 / 132',
      poster: 'https://placehold.co/300x500',
    },
    {
      id: 2,
      title: '웡카',
      time: '15:50',
      seats: '30 / 100',
      poster: 'https://placehold.co/300x500',
    },
    {
      id: 3,
      title: '듄: 파트2',
      time: '17:10',
      seats: '85 / 120',
      poster: 'https://placehold.co/300x500',
    },
    {
      id: 4,
      title: '극장판 귀멸의 칼날: 무한열차편',
      time: '14:30',
      seats: '48 / 132',
      poster: 'https://placehold.co/300x500',
    },
    {
      id: 5,
      title: '웡카',
      time: '15:50',
      seats: '30 / 100',
      poster: 'https://placehold.co/300x500',
    },
    {
      id: 6,
      title: '듄: 파트2',
      time: '17:10',
      seats: '85 / 120',
      poster: 'https://placehold.co/300x500',
    },
  ];
  
  function MovieCard() {
    return (
      <div className="movie-list">
        {dummyMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <div className="movie-meta">
                <span className="movie-time">{movie.time}</span>
                <span className="movie-seats">{movie.seats}</span>
              </div>
              <div className="movie-title">{movie.title}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default MovieCard;
export const Card = (movieData) => {
    const{poster, imdbID} = movieData;
    return (<>
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={poster} alt={imdbID} className="poster" />
                </div>
                <div className="ticket-container">
                    <div className="ticket-content">
                        <a href={`/movie/${imdbID}`}>
                            <button className="ticket__buy-button">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </>)
}
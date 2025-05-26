import './index.css'
export const SeriesCard = ({ data }) => {
    const { name, id, rating, cast, genre, watch_url, description } = data;
    return (
    
      <li className="card" >
        <h1>Name: {name}</h1>
        <h2>ID: {id}</h2>
        <h3>Rating: <span className={( `rating]  ${rating>=8.5?'super':'average'}`)}>{rating}</span></h3>
        <h3 style={{color:'green',backgroundColor:"gold"}}>Cast: {cast}</h3>
        <h5>Genre: <span >{genre}</span></h5>
        <h5>Watch URL: {watch_url}</h5>
        <p>Description: {description}</p>
        <button>WATCH NOW</button>
      </li>
  
    );
  };
  
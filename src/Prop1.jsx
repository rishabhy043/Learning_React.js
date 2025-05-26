export const SeriesCard = (props) => {
    console.log(props);
    return (
    <li>
    <img src={props.currentElement.img_url} alt={props.currentElement.title} width="40%" height="40%" />
    <h3>Rating: {props.currentElement.rating}</h3>
    <p>{props.currentElement.description}</p>
    <h5>Cast: {props.currentElement.cast}</h5>
    <h1>Rishhabh yadav</h1>
    <h5>Descrription: {props.currentElement.description}</h5>
    <h4>Genre: {props.currentElement.genre}</h4>
    <a href={props.currentElement.watch_url} target="_blank">
    <button>WATCH MOVIE</button>
    </a> 
    </li>
    );
  };
  
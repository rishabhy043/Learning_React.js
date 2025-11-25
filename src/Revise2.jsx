export const SeriesCardAPI = (props) =>{
    const a = props.currentElement;
    return(<>
    <li>
        <h1>Name: {a.name}</h1>
        <h2>Rating: {a.rating}</h2>
        <h2>ID: {a.id}</h2>
        <h4>Description: {a.description}</h4>
        <h3>Genre: {a.genre}</h3>
        <p>Cast: {a.cast}</p>
    </li>
    </>)
}
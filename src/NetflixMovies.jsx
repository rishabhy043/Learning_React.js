import seriesData from './api/seriesData.json'
const MovieList =()=>{
return(
<>
<h2>list Of Best Netflix Series</h2>
<Movie></Movie>
</>
)
}
 export const Movie=()=>{
    return(
        <>
       <ul>
       {
        seriesData.map((currentElement)=>{
            return(
                <li>
                {/* <img src="{seriesData[0].img_url}" alt="" width="40%"  height="40%" /> */}
           <h3>Rating: "{currentElement.rating}"</h3>
           <p>"{currentElement.description}"</p>
          <h5>Cast: "{currentElement.cast}"</h5>
          <h4>Genre: " { currentElement.genre } "</h4>
          <a href={currentElement.watch_url} target='blank'><button>WATCH MOVIE</button></a>
           </li>

            )
        })
       }
       </ul>

       {/* <li>
             <img src="{seriesData[0].img_url}" alt="" width="40%"  height="40%" />
        <h3>Rating: "{seriesData[0].rating}"</h3>
        <p>"{seriesData[0].description}"</p>
       <h5>Cast: "{seriesData[0].cast}"</h5>
       <h4>Genre: " { seriesData[0].genre } "</h4>
       <a href={seriesData[0].watch_url} target='blank'><button>WATCH MOVIE</button></a>
        </li> */}


        </>
    )
}
export default MovieList;
import seriesData from '../../api/seriesData.json';
import  SeriesCard  from './Destructuring_props.jsx';


const Netflixcard =()=>{
    return(
        <ul>
            {seriesData.map((curElem)=>{
                <SeriesCard key= {curElem.id} data={curElem} />
            })}
        </ul>
    )
}
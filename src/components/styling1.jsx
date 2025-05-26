import seriesData from "../api/seriesData.json"; // Make sure the file exists and extension is .json
import {SeriesCard} from ".components/styling2"; // SeriesCard component defined here
// import './index.css'
import '..components/styling.css'

const SeriesList = () => {
  return (
    <ul className="grid-three-component">
      {seriesData.map((item) => (
        <SeriesCard key={item} data={item} />
      ))}
    </ul>
  );
};

export default SeriesList;

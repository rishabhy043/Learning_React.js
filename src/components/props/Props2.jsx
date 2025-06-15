import seriesData from '../../api/seriesData.json';
import {SeriesCard} from './Prop1';
const PropsUse = () => {
  return (
    <ul>
      {
        seriesData.map((currentElement) => (          
          <SeriesCard key={currentElement.id} currentElement={currentElement} />
        ))
      }
    </ul>
  );
};

export default PropsUse;

import seriesData from './api/seriesData.json';
import { SeriesCard } from './Loop1';

export const Netflix = () => {
  return (
    <>
      {seriesData.map((currentElement) => (
        <SeriesCard key={currentElement.id} currentElement={currentElement} />
      ))}
    </>
  );
};

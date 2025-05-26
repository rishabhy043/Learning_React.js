export const SeriesCard = ({name,cast,description,rating}) => {
  return (
   <>
   <h1>Name: {name}</h1>
   <h2>Rating:  {rating}</h2>
   <h5>Description: {description}</h5>
   <h2>Cast: {cast}</h2>
   </>
  );
};

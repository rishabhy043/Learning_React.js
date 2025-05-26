
export const SeriesCard = ({data}) => {
    // console.log(props);

    // const { data } = props;    
    // Destructure ho rha h bcz props k andr data mil rha h and then key mil rha h
    //      props.img ==> mein s props hatt jayega from every place 

//    const{ img_url ,title,  rating , description , cast , genre , watch_url} = props.data;
   // Another way to destructure and 
   // Isme data.img/url/cast sbke aage k data word a rha tha wo bhi nhi ayega 

   const{ img_url ,title,  rating , description , cast , genre , watch_url} = data;
   // this is the 3rd way to destructure in this (ref: line No. 1) mein (props) ki jgh ({data}) pass kr skte h
   // Destructurin_props.jsx m line 9 m pss kari 2 key m se ek data hai isliye 

    return (
    <li>
    <img src={img_url} alt={title} width="40%" height="40%" />
    <h3>Rating: {rating}</h3>
    <p>{description}</p>
    <h5>Cast: {cast}</h5>
    <h1>Rishhabh yadav</h1>
    <h5>Descrription: {description}</h5>
    <h4>Genre: {genre}</h4>
    <a href={watch_url} target="_blank">
    <button>WATCH MOVIE</button>
    </a> 
    </li>
    );
  };
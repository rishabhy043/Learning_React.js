const WelcomeProps = (props) => {
    const greet = () => {
        alert('WELCOME RISHABH HOW ARE YOU');
    };
   
    return (
        <>
            <button onClick={props.handleClick}>CLICK ME</button>
            <button onMouseEnter={props.HandleOnHover}>HOVER ME</button>
            <button onClick={greet}>GREET ME</button>
        </>
    );
  };
  
  export default WelcomeProps;
  
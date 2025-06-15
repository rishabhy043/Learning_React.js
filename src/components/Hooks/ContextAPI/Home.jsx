// Home.jsx
import { useContext } from "react";
import { BioContext } from "./contextAPi";

export const Home = () => {
    const myName = useContext(BioContext);

    return (
        <>
            <h1>HELLO CONTEXT API, My Name is {myName}</h1>
        </>
    );
};

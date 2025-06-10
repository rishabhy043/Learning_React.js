import { useState } from "react"

export const HowNotToFetchDataApi = () => {
    const [apidata, setapidata] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")  //fetch() is called directly in the component body
        .then((res) => res.json())                        //Why it's wrong: React components re-render often, 
        .then((data) => setapidata(data))                 
        .catch((error) => console.log(error));
    return (<>
        <div className="container">
            <ul>
                Data:  {
                    apidata.map((curData) => {
                        return <li key={curData.id}>{curData.title}</li>
                    })
                }
            </ul>
        </div>
    </>)
}
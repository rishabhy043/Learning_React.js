import { useEffect, useState } from "react"

export const HowToFetchDataApi = () => {
    const [apidata, setapidata] = useState([]);

useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")  
        .then((res) => res.json())                         
        .then((data) => {setapidata(data)})                 
        .catch((error) => console.log(error));
},[])
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
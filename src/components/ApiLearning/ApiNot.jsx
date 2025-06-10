import { useState } from "react"

export const HowNotToFetchDataApi = () => {
    const [apidata, setapidata] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setapidata(data))
        .catch((error) => console.log(error));
    return (<>
        <div className="container">
            <ul>
                Data:  {
                    apidata.map((curData) => {
                        return <li key={curData.id}>{curData.post}</li>
                    })
                }
            </ul>
        </div>
    </>)
}
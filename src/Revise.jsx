import seriesData from "../src/api/seriesData.json"
import { SeriesCardAPI } from "./Revise2"
export const ImportDataAPI = () => {
    return(<>
        <ul>
            {
                seriesData.map((currentElement) =>{
                    <SeriesCardAPI key={currentElement.id} currentElement = {currentElement}></SeriesCardAPI>
                })
            }
        </ul>
        </>)
}
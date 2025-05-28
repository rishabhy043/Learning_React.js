import { useState } from 'react'
import './ToggleSwitch.css'
export const ToggleSwitch = () => {
    const [ison, setIson] = useState(false);

    const handleToggleClick = () => {
        setIson(!ison);
    }
    const checkison = ison ? "on" : "off";
    const toggleBGColor = { backgroundColor: ison ? "green" : "red" }

    return (
        <div className="toggle-Switch" style={toggleBGColor} onClick={handleToggleClick}>
            <div className={`switch ${checkison}`}>
                <span className="switch-state" >
                    {checkison}
                </span>
            </div>
        </div>
    )
}
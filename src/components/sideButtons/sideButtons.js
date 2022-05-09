import './sideButtons.css'
import { Link } from "react-router-dom";

const SideButtons = function() {
    return (
        <div className="side-buttons">
            <div id="donate">
                <p>Donate</p>
            </div>
            <div id="volunteer">
                <p>Volunteer</p>
            </div>
        </div>
    )
}

export default SideButtons
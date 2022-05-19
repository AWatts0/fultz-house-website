import React from "react";
import { Link } from "react-router-dom";
import './brochures.css';

/*
TO DO ... 
get the thing working how you want, get styles all standard before adding rest of content

*/

export default function Brochures() {
    return (
        <div className="flex-row">
            <div className="flex-item">
                <Link to={'/culture'}>Culture and the Supernatural</Link>
            </div>
            <div className="flex-item">
                <Link to={'/daily-life'}>Daily Life, Collectibles and Holidays</Link>
            </div>
            <div className="flex-item">
                <Link to={'/education'}>Education</Link>
            </div>
            <div className="flex-item">
                <Link to={'/museum-and-surrounding-area'}>Fultz House Museum and Surrounding Area</Link>
            </div>
            <div className="flex-item">
                <Link to={'/historic-sackville-and-beaverbank'}>Historic Sackville and Beaver Bank</Link>
            </div>
            <div className="flex-item">
                <Link to={'/historical-figures'}>Historical Figures in Profile</Link>
            </div>
            <div className="flex-item">
                <Link to={'/kitchens'}>Out of Historic Sackville Kitchens</Link>
            </div>
            <div className="flex-item">
                <Link to={'/sackville-attractions'}>Historic Sackville Attractions and Places</Link>
            </div>
            <div className="flex-item">
                <Link to={'/transportation-and-trades'}>Transportation and the Trades</Link>
            </div>
        </div>
    )
}
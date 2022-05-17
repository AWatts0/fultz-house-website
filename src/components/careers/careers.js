import React from "react";

const Careers = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <h1>Careers</h1>
                    <br />
                    <h3>Current Openings:</h3>
                    <br />
                    {/* comment out the below noOpenings p tag if there are positions*/}
                    <p id="noOpenings">
                        There are currently no openings available.
                    </p>
                </div>
                <div className="col-1"></div>      
            </div>
            {/* Job info template below. If there's more that one posting, copy from next line, down to itw closing div tag*/}
            <div className="row" id="jobPosting">
                <div className="col-1"></div>
                <div className="col-10">
                    {/* place info here */}
                    {/* <h6>Job Title</h6>
                    <h7>Location: </h7>
                    <h7>Hours: </h7>
                    <h7>Payrate: </h7>
                    <p>Description: </p>
                    <h7>Person to contact: </h7>
                    <h7>Closing Date: </h7> */}
                </div>
                <div className="col-1"></div>   
            </div>
        </div>
    )
}

export default Careers;
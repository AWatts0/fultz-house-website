import React from "react";
import image1 from "../pics/homepage-carousel/building-front.jpg"
import image2 from "../pics/homepage-carousel/tree-cover.jpeg"
import image3 from "../pics/homepage-carousel/model.jpeg"

const Homepage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={image1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Welcome to Fultz House!</h1>
                    <br/>
                    <p> 
                        Located at the corner of Nova Scotia's most famous intersection,
                        Fultz House Museum's collections reflect over 200 years of Sackville history. Constructed in the 1860s,
                        Bennett Fultz's house is now home to hundreds of artifacts, photographs, and displays.
                        Come discover Sackville's proud history for yourself!
                    </p>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                {/* Insert Social media feeds here */}
                <div className="col-1"></div>
                <div className="col-4" id="facebook-feed">
                    {/* insert facebook feed code here */}
                </div>
                <div className="col-2"></div>
                <div className="col-4" id="instagramfeed-feed">
                    {/* insert instagram feed code here */}                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>

    )
}

export default Homepage;
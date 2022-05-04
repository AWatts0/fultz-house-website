import React from "react";
import image from '../../pics/image.png';
import './commHistory.css';
import logo from '../../pics/logo.png';
import image1 from '../../pics/photo01.png';
import image2 from '../../pics/photo02.png';
import image3 from '../../pics/photo03.png';
import pdf1 from "../../pdfs/An Introduction to Wheelwrights.pdf";
import pdf2 from "../../pdfs/Common Elements in Mi'kmaq Literature.pdf";
import pdf3 from "../../pdfs/Craftspeople in the Community.pdf";
import pdf4 from "../../pdfs/Fultz Corner History.pdf";
import pdf5 from "../../pdfs/Historic Sackville.pdf";
import pdf6 from "../../pdfs/History of Education - Sackville Schools (A Brief Profile).pdf";
import pdf7 from "../../pdfs/History of Education in Sackville Schools.pdf";
import pdf8 from "../../pdfs/Horseshoes - Not Just For Throwing Profile.pdf";
import pdf9 from "../../pdfs/Life in a Victorian Parlour Profile.pdf";
import pdf10 from "../../pdfs/Lower Sackville School Profile.pdf";
import pdf11 from "../../pdfs/Maroon Hill Education Story Profile.pdf";
import pdf12 from "../../pdfs/Middle Sackville School Profile.pdf";
import pdf13 from "../../pdfs/Outhouses Through the Ages Profile.pdf";
import pdf14 from "../../pdfs/Preserving Profile.pdf";
import pdf15 from "../../pdfs/Sackville Downs Profile.pdf";
import pdf16 from "../../pdfs/Sackville Drive-in Theatre Profile.pdf";
import pdf17 from "../../pdfs/Sackville Raceway  Profile.pdf";
import pdf18 from "../../pdfs/Soap Profile.pdf";
import pdf19 from "../../pdfs/Summer Kitchen Profile.pdf";
import pdf20 from "../../pdfs/The Story of the Grove Finishing School.pdf";
import pdf21 from "../../pdfs/THEEAR~1.pdf";
import pdf22 from "../../pdfs/Traditional Education - Mi'kmaq People Profile.pdf";
import pdf23 from "../../pdfs/Travelling in the Early Days.pdf";

const CommHistory = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a class="navbar-brand" href="#"><img src={logo} alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h1>Our Community History</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 my-auto text-start">
                                <p>Sackville’s earliest roots as a settlement can be traced back to a fort built at the head of Bedford Basin to defend Halifax against French soldiers and their Mi’kmaq allies. Named Fort Sackville in honour of Lionel Cranfield Sackville, Duke of Dorset, the small barracks and palisade were constructed on high ground near the mouth of the Sackville River in what is now Bedford. Fort Sackville’s strategic position facilitated communication with Acadian communities in the Annapolis Valley and reinforced Halifax’s defenses.</p>
                            </div>
                            <div className="col-4">
                                <img src={image1} alt="" className="img-fluid my-3" />
                                <figcaption>"Logging along the Sackville River brought many settlers to the Sackville area in the 1800s."</figcaption>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src={image2} alt="" className="img-fluid my-3" />
                                <figcaption>"Pictured are several local woodsmen preparing to move a log down the Sackville River, c.1920. From the left: Percy Harpell. Johnny Smeltzer, A.J. Smeltzer, Frank Robinson, Duncan Fader and Ed Thomas."</figcaption>
                            </div>
                            <div className="col-8 my-auto text-start">
                                <p>Joseph Scott, one of Sackville’s first residents, landed in Halifax in 1749 onboard the ship London. An entrepreneur, his timber business soon expanded beyond the head of the basin to sawmills constructed along the Sackville River. In addition to his business ventures, Scott held several public offices over his lifetime, becoming a Justice of the Peace, paymaster of the Halifax garrison, and serving as a member of the Legislative Assembly for Kings County. In 1767, Scott was granted land at the northern extremity of Bedford Basin, where he would have a large Dutch Colonial-style manor built for his family. Today, the Scott Manor House stands as the oldest residence in the Bedford-Sackville area.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 my-auto text-start">
                                <p>Sackville’s location at the head of Bedford Basin proved to be a pivotal intersection for travelers journeying to Truro and Windsor. The road to Cobequid, a Mi’kmaq term for “the end of the water’s flow”, was transformed from a rough narrow path to a major road as stagecoach service to Truro was established in 1816. Likewise, Acadian farmers had employed the path to Chebucto for almost 100 years before Cornwallis sent orders to have the roadway widened for improved passage to Windsor and the Minas Basin. With access to both of these important roadways, Sackville became a traditional stopping place for travelers. Twelve Mile House, an inn operated by the Fultz family, soon became a Sackville landmark. Early morning stagecoaches from Halifax regularly stopped at the inn for breakfast, while Halifax society members gathered in the 40 by 25 foot ballroom for special events. Twelve Mile House operated successfully for over 50 years.</p>
                            </div>
                            <div className="col-4">
                                <img src={image3} alt="" className="img-fluid my-3" />
                                <figcaption>"A mother and her three small children going for a ride in a horse-drawn buggy. Many of Sackville's early residents depended on animals for farm work and transportation."</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h3>The Fultz Family</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col my-auto">
                                <p>In 1858, Bennett Fultz, a wheelwright and cabinet maker, purchased the piece of land opposite Twelve Mile House from his cousin William. On the property, he built a 20 by 20 foot house for himself and for his wife, Mary Robinson. As their family grew to eight children, their small house was soon expanded to a full two-storey building with a dining room and summer kitchen. The Fultzes took advantage of their busy intersection by operating a post office from Mary's kitchen window. Herman, one of the Fultz children, became a talented iron worker, operating a successful blacksmith shop across the street. With enterprising Fultzes on each corner of the intersection, there can be no doubt of this family's influence in Sackville's early days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <div className="container">
                <h3> More History</h3>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf1} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a short card.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf2} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf3} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf4} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf5} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf6} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf7} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf8} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf9} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf10} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf11} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf12} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf13} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf14} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf15} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf16} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf17} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf18} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf19} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf20} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf21} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf22} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a href={pdf23} class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommHistory;
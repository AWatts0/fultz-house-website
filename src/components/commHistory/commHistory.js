import React from "react";
import image from '../../pics/image.png';
import './commHistory.css';
import logo from '../../pics/logo.png';
import image1 from '../../pics/photo01.png';
import image2 from '../../pics/photo02.png';
import image3 from '../../pics/photo03.png';
import pdf1 from "../../pdfs/history/An Introduction to Wheelwrights.pdf";
import pdf2 from "../../pdfs/history/Common Elements in Mi'kmaq Literature.pdf";
import pdf3 from "../../pdfs/history/Craftspeople in the Community.pdf";
import pdf4 from "../../pdfs/history/Fultz Corner History.pdf";
import pdf5 from "../../pdfs/history/Historic Sackville.pdf";
import pdf6 from "../../pdfs/history/History of Education - Sackville Schools (A Brief Profile).pdf";
import pdf7 from "../../pdfs/history/History of Education in Sackville Schools.pdf";
import pdf8 from "../../pdfs/history/Horseshoes - Not Just For Throwing Profile.pdf";
import pdf9 from "../../pdfs/history/Life in a Victorian Parlour Profile.pdf";
import pdf10 from "../../pdfs/history/Lower Sackville School Profile.pdf";
import pdf11 from "../../pdfs/history/Maroon Hill Education Story Profile.pdf";
import pdf12 from "../../pdfs/history/Middle Sackville School Profile.pdf";
import pdf13 from "../../pdfs/history/Outhouses Through the Ages Profile.pdf";
import pdf14 from "../../pdfs/history/Preserving Profile.pdf";
import pdf15 from "../../pdfs/history/Sackville Downs Profile.pdf";
import pdf16 from "../../pdfs/history/Sackville Drive-in Theatre Profile.pdf";
import pdf17 from "../../pdfs/history/Sackville Raceway  Profile.pdf";
import pdf18 from "../../pdfs/history/Soap Profile.pdf";
import pdf19 from "../../pdfs/history/Summer Kitchen Profile.pdf";
import pdf20 from "../../pdfs/history/The Story of the Grove Finishing School.pdf";
import pdf21 from "../../pdfs/history/Traditional Education - Mi'kmaq People Profile.pdf";
import pdf22 from "../../pdfs/history/Travelling in the Early Days.pdf";

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
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">An Introduction to Wheelwrights</h5>
                                <p class="card-text">Being a wheelwright was a traditional family trade and a very common job choice for
                                    early Sackville settlers.</p>
                                <a href={pdf1} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Mi’kmaq Literature</h5>
                                <p class="card-text">Common elements in Mi’kmaq Literature</p>
                                <a href={pdf2} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Craftspeople in the Community</h5>
                                <p class="card-text">Before there were factories, communities were formed by craftspeople (artisans).
                                    Everything was handmade.
                                </p>
                                <a href={pdf3} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Sackville’s Fultz Corner</h5>
                                <p class="card-text">A brief history on Sackville’s Fultz Corner.</p>
                                <a href={pdf4} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Historic Sackville: The Early Years</h5>
                                <p class="card-text">Founding moments; The naming of Sackville; The Two Great Roads; How our communities got their names.</p>
                                <a href={pdf5} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The History of Education - Sackville Schools</h5>
                                <p class="card-text">The stories surrounding Sackville’s education system are widespread, from
                                    travelling in the nippy days of February to recalling the memory of hearing
                                    fingernails scrape across blackboards.</p>
                                <a href={pdf6} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Sackville Schools</h5>
                                <p class="card-text">The History of Education in Sackville Schools. Written by Michael D. Smiley</p>
                                <a href={pdf7} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Horseshoes: Not just for throwing</h5>
                                <p class="card-text">Have you ever wondered why there’s often a horseshoe above the
                                    doors in both a blacksmith shop and a cooperage?</p>
                                <a href={pdf8} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Life in a Victorian Parlour</h5>
                                <p class="card-text">A parlour was a very formal room traditionally used to receive guests.  Decorated with the family’s most prized possessions, it was a way of showcasing their status and wealth.</p>
                                <a href={pdf9} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Lower Sackville School</h5>
                                <p class="card-text">A brief history of Lower Sackville School.</p>
                                <a href={pdf10} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Maroon Hill Children Education Story</h5>
                                <p class="card-text">In 1796 approximately five hundred black residents of Jamaica known as
                                    Maroons arrived in Halifax.</p>
                                <a href={pdf11} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Middle Sackville Schoolhouse</h5>
                                <p class="card-text">The Life of the Middle Sackville Schoolhouse.</p>
                                <a href={pdf12} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Outhouses through the Ages</h5>
                                <p class="card-text">It is believed that outhouses originated from Europe in the 15th
                                    century. An outhouse was constructed like a small shed, but instead of
                                    holding tools it holds a toilet.</p>
                                <a href={pdf13} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Preserving</h5>
                                <p class="card-text">Preserved food was common in early Sackville kitchens because it
                                    could slow or even stop the food’s decomposition.</p>
                                <a href={pdf14} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Sackville Downs</h5>
                                <p class="card-text">The harness raicing; A love of Racing; A Modern Track.</p>
                                <a href={pdf15} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Sackville Drive-in Theatre</h5>
                                <p class="card-text">The Sackville Drive-in Theatre was more than a business, it was a
                                    place where the community gathered, socialized, and were
                                    entertained.</p>
                                <a href={pdf16} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Sackville Raceway</h5>
                                <p class="card-text">Sackville’s First Racetrack.</p>
                                <a href={pdf17} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">A History of Soap</h5>
                                <p class="card-text">Before the 18th century, soap was considered a luxury because only
                                    the wealthy could afford it.</p>
                                <a href={pdf18} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Summer Kitchen</h5>
                                <p class="card-text">It was a room
                                    used during the summer months for cooking, baking, and other
                                    chores that produced a significant amount of heat.</p>
                                <a href={pdf19} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">The Story of the Grove School</h5>
                                <p class="card-text">In addition to the typical grade schools in Sackville, a finishing
                                    school was situated in Beaver Bank, and this is its
                                    story.</p>
                                <a href={pdf20} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Mi’kmaq Education</h5>
                                <p class="card-text">The Traditional Education Ways of the Mi’kmaq People.</p>
                                <a href={pdf21} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <div class="card-body">
                                <h5 class="card-title">Travelling in The Early Days</h5>
                                <p class="card-text">Introducing road travel and wagons; Stagecoach travel; A communication lifeline; and more.</p>
                                <a href={pdf22} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CommHistory;
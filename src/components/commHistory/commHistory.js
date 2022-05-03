import React from "react";
import image from '../image.png';
import './commHistory.css';

const CommHistory = () => {
    return (
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
                            <img src={image} alt="" className="img-fluid my-3"/>
                            <figcaption>"Some description for the picture above"</figcaption>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src={image} alt="" className="img-fluid my-3"/>
                            <figcaption>"Some description for the picture above"</figcaption>
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
                            <img src={image} alt="" className="img-fluid my-3"/>
                            <figcaption>"Some description for the picture above"</figcaption>
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
    )
}

export default CommHistory;
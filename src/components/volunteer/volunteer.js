import React from 'react';
import './volunteer.css';
import volpic1 from '../../pics/volunteer-pics/16831157_10158247000915273_7180362434099788241_n.jpeg';
import volpic2 from '../../pics/volunteer-pics/65913498_10161916467635273_4517723386805223424_n.jpeg';
import volpic3 from '../../pics/volunteer-pics/IMG_8128.jpeg';
import volpic4 from '../../pics/volunteer-pics/IMG_8268.jpeg';
import volpdf from '../../pdfs/Fultz House Museum - A Volunteer Destination 2021.pdf';

const Volunteer = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <h1>Volunteers Destination</h1>
                    <div className='col-1'></div>
                    <div className='col-12 col-xl-3'>
                        <h4>Mission Statement</h4>
                        <p>To collect, preserve, and present the history and
                            interests of Sackville, Lucasville, Beaver Bank,
                            Kinsac and the surrounding area.</p>
                        <h4>Tag Line</h4>
                        <p>Sackville’s Heritage Portal</p>
                        <h4>Vision</h4>
                        <p>Understanding -&gt; building a better future.</p>
                    </div>
                    <div className='col-12 col-xl-4'>
                        <h4>Volunteer opportunities</h4>
                        <p>We are always looking for people
                            willing and able to take jobs on in
                            the areas of carpentry, painting,
                            and maintenance work.<br/>
                            Have a green thumb? We have
                            gardening and landscaping projects
                            that could use your thumbs.<br/>
                            Interested in research,
                            genealogy, archives, and being a
                            community historian?<br/>
                            Are you skilled with technology
                            and interested in digitization
                            and website design?<br/>
                            Want to know more about artifacts?
                            There are many opportunities to learn
                            about artifacts and their stories.</p>
                    </div>
                    <div className='col-12 col-xl-3'>
                        <h4>Goals for Our Volunteers</h4>
                        <ul className='list-unstyled'>
                            <li>Gain confidence</li>
                            <li>Make a difference</li>
                            <li>Meet people</li>
                            <li>Be part of a community</li>
                            <li>Learn new skills</li>
                            <li>Understand the community’s development and heritage</li>
                            <li>Have fun</li>
                        </ul>
                    </div>
                    <div className='col-1'></div>
                </div>
                <div className='row'>
                    <div className='col-12 my-3'>
                        <a href={volpdf}>Review the Volunteering Broucher for more information</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <img className='img-thumbnail img-vol' src={volpic1} alt=''/>
                        <img className='img-thumbnail img-vol' src={volpic2} alt=''/>
                        <img className='img-thumbnail img-vol' src={volpic3} alt=''/>
                        <img className='img-thumbnail img-vol' src={volpic4} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer;
import React from 'react';
import './notablePeople.css';
import pdf01 from '../../pdfs/people/A.J. Smeltzer Profile.pdf';
import pdf02 from '../../pdfs/people/Abraham Gesner Profile.pdf';
import pdf03 from '../../pdfs/people/Agnes ODonnell Kelly Profile.pdf';
import pdf04 from '../../pdfs/people/Burdett Lively Profile.pdf';
import pdf05 from '../../pdfs/people/Emily Payne Profile.pdf';
import pdf06 from '../../pdfs/people/Fultz Family Profile.pdf';
import pdf07 from '../../pdfs/people/George Lawson Profile.pdf';
import pdf08 from '../../pdfs/people/Gertrude Parker Profile.pdf';
import pdf09 from '../../pdfs/people/Harold T. Barrett Profile.pdf';
import pdf010 from '../../pdfs/people/Harry R. Hamilton  Profile.pdf';
import pdf011 from '../../pdfs/people/Leslie Thomas Profile.pdf';
import pdf012 from '../../pdfs/people/Mary Fultz Profile.pdf';
import pdf013 from '../../pdfs/people/Sadie Thomas Profile.pdf';
import pdf014 from '../../pdfs/people/Ted B. Blackburn Profile.pdf';
import pic1 from '../../pics/Picture1.png';
import pic2 from '../../pics/Picture2.png';
import pic3 from '../../pics/Picture3.png';
import pic4 from '../../pics/Picture4.jpg';
import pic5 from '../../pics/Picture5.jpg';
import pic6 from '../../pics/Picture6.png';
import pic7 from '../../pics/Picture7.png';
import pic8 from '../../pics/Picture8.jpg';
import pic9 from '../../pics/Picture9.jpg';
import pic10 from '../../pics/Picture10.png';
import pic11 from '../../pics/Picture11.png';
import pic12 from '../../pics/Picture12.jpg';
import pic13 from '../../pics/Picture13.png';
import pic14 from '../../pics/Picture14.png';

const NotablePeople = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h1>Notable People</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">A.J. Smeltzer</h5>
                                <p class="card-text">Mr. Smeltzer was an active member of the community outside
                                    business and political circles. He was known for
                                    his decorative ironwork.</p>
                                <a href={pdf01} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Abraham Gesner</h5>
                                <p class="card-text">It has been said that he was born with a love of geology in his bones. Gesner became the first government geologist in a British colony when appointed Provincial Geologist of New Brunswick in 1838.</p>
                                <a href={pdf02} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Agnes O'Donnell Kelly</h5>
                                <p class="card-text">Agnes O’Donnell Kelly was an enthusiastic chronicler of local history and a willing teacher of local heritage. Ms. Kelly was a faithful friend to the Fultz House Museum. </p>
                                <a href={pdf03} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Burdett Lively</h5>
                                <p class="card-text">When World War II began, Beaver Bank’s Burdett Lively volunteered to join the forces, like most Canadians who fought in World War II since conscription was not imposed until the later stages.</p>
                                <a href={pdf04} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Emily Payne</h5>
                                <p class="card-text">At one point, Emily cared for twenty-five babies in her home. She showed these wee tots love and attention. She embraced them, as if they were her own.</p>
                                <a href={pdf05} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Fultz Family</h5>
                                <p class="card-text">The Fultz family identified themselves to be farmers, but in actuality they led diverse and interesting lives, being credits to their trades.</p>
                                <a href={pdf06} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">George Lawson</h5>
                                <p class="card-text">He constructed one of the first known Canadian botanical gardens and became a founding member and president of the Royal Society of Canada.</p>
                                <a href={pdf07} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Gertrude Parker</h5>
                                <p class="card-text">The Halifax Chronicle-Herald once wrote an article on Parker, stating: “Until the dial system was introduced in 1963, Mrs. Gertrude Parker was the telephone operator, the brains, the human component, through which every call in the area had to funnel.</p>
                                <a href={pdf08} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Harold T. Barrett</h5>
                                <p class="card-text">In 1985, the first junior high school in Beaver Bank was named after Mr. Barrett, known today as Harold T. Barrett Junior High School.</p>
                                <a href={pdf09} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic10} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Harry R. Hamilton</h5>
                                <p class="card-text">Harry was a man of good character and it was said of him by his comrades that he never had a bad thing to say about anyone and no one had a bad thing to say about him.</p>
                                <a href={pdf010} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic11} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Leslie Thomas</h5>
                                <p class="card-text">Leslie Thomas was the type of man who lived his life for his community.</p>
                                <a href={pdf011} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic12} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mary Fultz</h5>
                                <p class="card-text">She connected families with loved ones through the passage of the written word with one stamp at a time.</p>
                                <a href={pdf012} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic13} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sadie Thomas</h5>
                                <p class="card-text">One of Sackville’s most remarkable teachers was born in 1881. Known as Sadie by her friends and loved ones, Sadie lived a remarkable life.</p>
                                <a href={pdf013} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent">
                            <img src={pic14} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ted B. Blackburn</h5>
                                <p class="card-text">Blackburn was a man who listened and followed what the public wanted. It has even been said that his store was the K-Mart of the day. </p>
                                <a href={pdf014} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotablePeople;
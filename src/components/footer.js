import React from "react";
import "./footer.css";


const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2">
                    <p><b>Fultz House Museum</b></p>
                    <p>33 Sackville Drive <br/>
                        Lower Sackville <br/>
                        NS B4C 0E5
                    </p>
                </div>
                <div className="col-2">
                    <p><br/></p>
                    <p>
                    Phone: 902-865-3794 <br/>
                    Fax: 902-865-6940
                    Email: <a href="mailto: fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a><br/>
                    </p>
                </div>
                <div className="col-2">
                <p><b>Hours</b></p>
                    <p>
                        Open All Week, 10am to 5pm <br/>
                        During July and August
                    </p>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
    )
}

export default Footer;

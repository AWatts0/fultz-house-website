import React from "react";
import statementOfPurposePDF from "../../pdfs/governance/Statement of Purpose.pdf";
import researchPolicyPDF from "../../pdfs/governance/FCRS Research Policy.pdf";
import constitutionByLawPDF from "../../pdfs/governance/Constitution and By-Laws 2022.pdf";
import artifactPDF from "../../pdfs/governance/Artifact Donor Questionnaire.pdf";
import archivalPDF from "../../pdfs/governance/Archival Donor Questionnaire.pdf";
import AGM2022ReportPDF from "../../pdfs/governance/AGM Report 2022.pdf";

const Governace = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h3>Governance</h3>
                <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Fultz Corner Restoration Society</h5>
                                <p class="card-text">
                                    Statement of Purpose for the Society.
                                </p>
                                <a href={statementOfPurposePDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Reseach Policy</h5>
                                <p class="card-text">
                                    Guidelines by which youth summer employees, volunteers, and
                                    the general public are able to access and use resources held
                                    in the Museum’s collection.
                                </p>
                                <a href={researchPolicyPDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Constitution and By-Laws</h5>
                                <p class="card-text">
                                    -
                                </p>
                                <a href={constitutionByLawPDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Artifact Donor Questionnaire</h5>
                                <p class="card-text">
                                    -
                                </p>
                                <a href={artifactPDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">Archival Donor Questionnaire</h5>
                                <p class="card-text">
                                    -
                                </p>
                                <a href={archivalPDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 bg-transparent shadow-lg">
                            <div class="card-body">
                                <h5 class="card-title">AGM Report 2022</h5>
                                <p class="card-text">
                                    The report from after our 2022 Annual General Meeting.
                                </p>
                                <a href={AGM2022ReportPDF} class="card-link">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Governace;
import React from "react";

const Projects = () => (

    <div className="container">
        <section id="portfolio">

            <h2>Projects</h2>
            <hr />

            <div className="row">

                <div className="col-sm-4" id="projectOne">
                    <a href="https://n1flight.github.io/Corona_Showdown/">
                        <img className="project image-fluid" src="images/coronaShowdown.png" alt="corona-showdown" id="proj-img" />
                        <p className="projectImageTitle">Corona Showdown</p>
                    </a>
                </div>

                <div className="col-sm-4" id="projectTwo">
                    <a href="https://rocky-refuge-43458.herokuapp.com/">
                        <img className="project image-fluid" src="images/github.png" alt="to-apply" id="proj-img" />
                        <p className="projectImageTitle">To Apply Or Not To Apply</p>
                    </a>
                </div>

                <div className="col-sm-4" id="projectThree">
                    <a href="https://github.com/Rconat/crypto-university">
                        <img className="project image-fluid" src="images/github.png" alt="crypto-university" id="proj-img" />
                        <p className="projectImageTitle">Crypto University</p>
                    </a>
                </div>

            </div>

            <br />
            <br />
            <br />

            <div className="row">

                <div className="col-sm-4" id="projectFour">
                    <a href="https://n1flight.github.io/employee-directory/">
                        <img className="project image-fluid" src="images/github.png" alt="Emp-Directory" id="proj-img" />
                        <p className="projectImageTitle">Employee Directory</p>
                    </a>
                </div>

                <div className="col-sm-4" id="projectFive">
                    <a href="https://rocky-refuge-43458.herokuapp.com/">
                        <img className="project image-fluid" src="images/PasswrdGenerator.png" alt="Password Generator" id="proj-img" />
                        <p className="projectImageTitle">Password Generator</p>
                    </a>
                </div>

                <div className="col-sm-4" id="projectSix">
                    <a href="https://hidden-thicket-33666.herokuapp.com/">
                        <img className="project image-fluid" src="images/github.png" alt="Eat Da Burger" id="proj-img" />
                        <p className="projectImageTitle">Eat-Da-Burger!</p>
                    </a>
                </div>

            </div>

            <br />
            <br />
            <br />

            {/* <div className="row">
                <div className="col-sm-12">
                    <h2 id="moreProj">More projects coming soon! ... </h2>
                </div>
            </div> */}

            <hr />

        </section>
    </div>
)

export default Projects
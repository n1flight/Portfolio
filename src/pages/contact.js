import React from 'react'

const Contact = () => (
    <div className="container">
        <div className="row">
        <section id="contact">
            <div className="col-lg">
            <h2>Contact Info</h2>
            <hr/>
            <ul className="contact-links">
                <li><a href="mailto: Nadersalem123@gmail.com"><strong>Email</strong></a>
                </li>
                <li><a href="https://github.com/n1flight"><strong>Github Profile</strong>
                <img className="image-fluid" src="images/github.png" alt="Pic" id="cont-img" /></a>
                </li>
                <li><a href="https://www.linkedin.com/in/nader-salem-9850a2194/"><strong>LinkedIn Profile</strong>
                <img className="image-fluid" src="images/linkedin.png" alt="Pic" id="cont-img" /></a>
                </li>
                <li><a href="https://stackoverflow.com/users/14532539/n1flight"><strong>Stackoverflow</strong>
                <img className="image-fluid" src="images/stackoverflow.png" alt="Pic" id="cont-img" /></a>
                </li>
            </ul>
            <hr/>
            </div>
        </section>
        </div>
    </div>
)

export default Contact
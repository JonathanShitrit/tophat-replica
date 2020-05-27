import React, { Component } from "react";

class About extends Component {
    render() {
        const leftAlign = {
            textAlign: "left"
        }

        return (
            <div style={{ padding: "20px" }}>
                <p>Indelible Interact is a platform that allows instructors to create assignments and questions that tests a students understanding of the material.</p>
                <br />
                <h2 style={leftAlign}>Karishma Muni </h2>
                <p>
                    Hi There! My name is Karishma and I am a graduating senior at Queens College CUNY majoring in Computer Science. I recently got interested in web development and am enjoying web applications development. Thank you so much for visiting my website!
                </p>


                <h2 style={leftAlign}>Jonathan Shitrit</h2>
                <p>
                    Hi I'm Jonathan, an undergraduate Computer Science student at CUNY Queens College. I have built a few iOS apps with Swift and I am currently learning the Full Stack web development with React and Node.js.
                </p>

                <h2 style={leftAlign}>Zachary Wing</h2>
                <p>
                    Hi, I am an undergraduate student at Queens College, City University of New York studying computer science and mathematics.
                </p>
            </div>
        )
    }
}

export default About;

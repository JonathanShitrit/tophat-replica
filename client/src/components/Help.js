import React, { Component } from "react";

class Help extends Component {
    render() {
        const leftAlign = {
            textAlign: "left"
        }
        return (
            <div style={{ padding: "20px" }}>
                <h3 style={leftAlign}>Get Started for Instructors</h3>
                <p>First create questions that can be multiple choice or textbox short answer.</p>
                <p>Next creat a Question Set and add all the relevant questions to that set.</p>
                <br />
                <h3 style={leftAlign}>Get Started for Students</h3>
                <p>"Classwork" will show all the question sets that pertain to you.</p>
                <p>Complete a question set in Classwork and then click on "Gradebook".</p>
                <p>"Gradebook" shows your score to that corresponding question set.</p>
            </div>
        )
    }

}

export default Help;
import React, { Component } from "react";

class Help extends Component {
    render() {
        const leftAlign = {
            textAlign: "left"
        }
        return (
            <div style={{ padding: "20px" }}>
                <h3 style={leftAlign}>Get Started for Instructors</h3>
                <p>First create questions that can be multiple choice or textbox short answer. Note: only questions with a single correct answer are currently supported.</p>
                <p>Next create a Question Set and add all the associated questions to that set.</p>
                <br />
                <h3 style={leftAlign}>Get Started for Students</h3>
                <p>Selecting "Classwork" will display in the left sidebar menu all the question sets that have been assigned to you.</p>
                <p>Select the assignment that you would like to work on from the left sidebar menu.</p>
                <p>After entering or selecting your answer, click the "Save answer" button.</p>
                <p>Click the "Submit" button to submit your final answer.</p>
                <p>After completing all questions in the assignment, click on the "Complete Assignment" button at the bottom of the assignment.</p>
                <br />
                <h3 style={leftAlign}>Future Releases</h3>
                <p>Support for multiple choice questions with more than one correct answer.</p>
                <p>"To Do" will display all assignments that have not been completed</p>
                <p>"Gradebook" will display scores to completed assignments.</p>
            </div>
        )
    }

}

export default Help;
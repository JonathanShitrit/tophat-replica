import React, { Component } from "react";
/*
import ShowQuestions from "./ShowQuestions";
import InnerHTML from 'dangerously-set-html-content'
*/

class ShowClasswork extends Component {

    state = {
        questions: [],
        questionsIds: [],
        questionSetName: "",

        score: 0,
        pointTotal: 0,

        multiChoiceAnswer: Boolean,

        displayQuestion: true,
    }

    checkMultiChoiceAnswer = (isAnswer, points) => {
        if (isAnswer) {
            this.setState({
                score: this.state.score + points,
            })
        }
        this.setState({
            pointTotal: this.state.pointTotal + points,
        })
        alert(this.score);
        alert(this.pointTotal);
    }

    setAnswer = (answer) => {
        this.setState({
            multiChoiceAnswer: this.state.answer
        })
    }

    toggleDisplayQuestion = () => {
        this.setState({ displayQuestion: !this.state.displayQuestion });
    }

    componentDidMount() {
        // Get question set
        this.loadQuestionSet();
    }

    submitHandler(e) {
        e.preventDefault();
        alert("Submission succcessful");
    }

    loadQuestionSet = () => {
        fetch(`${document.location.origin}/api/questions/questionset/${this.props.questionSetName}`)
            .then(response => response.json())
            .then(json => {
                console.log(json.questionSetName);
                this.setState({ questionSetName: json.questionSetName })
                this.setState({ questionsIds: [...json.questions] },
                    () => {
                        // Attempt to fetch this set's questions
                        // Else display there are no questions
                        if (json.questions.length > 0)
                            this.getSetsQuestions([...json.questions])
                        else {
                            var x = document.getElementById("list-questions");
                            x.innerHTML = "<h4>There are no questions currently in this set.</h4>";
                        }

                    })
            })
            .catch(err => alert(err.message));
    }


    getSetsQuestions = (ids) => {
        var x = document.getElementById("list-questions");
        x.innerHTML = "";


        // Loop over this set's questions array and fetch each question's data
        ids.map(id => {
            fetch(`${document.location.origin}/api/questions/questions/${id}`)
                .then(response => response.json())
                .then(json => {

                    var z = "";

                    if (json.questionType == "MULTIPLE") {
                        z += `
                        <div class="col-sm-10" style="padding:20px 55px 25px">
                                <div class="card border-dark">
                                    
                                    <form onSubmit={this.submitHandler} className="instructor-form">
                                    <div class="card-header"><h2>${json.questionTitle}</h2></div>
                                    <p class="card-text">Points: ${json.points}</p>
                                    <p class="card-text">${json.questionText}</p>
                                    
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input onChange={this.setAnswer(json.choices[0].IsAnswer)} type="radio" id="choice0" style={{ margin: "20px" }} name="choice" value="json.choices[0].Choice" required />
                                                <label htmlFor="choice0" style={{ marginRight: "10px" }}>${json.choices[0].Choice}</label>
                                                <p class="card-text"> ${json.choices[0].IsAnswer}</p>
                                                <input onChange={this.setAnswer(json.choices[1].IsAnswer)} type="radio" id="choice1" style={{ margin: "4px" }} name="choice" value="json.choices[1].Choice" required />
                                                <label htmlFor="choice1" style={${{ marginRight: "50px" }}>${json.choices[1].Choice}</label>
                                                <p class="card-text"> ${json.choices[1].IsAnswer}</p>
                                                <input onChange={this.setAnswer(json.choices[2].IsAnswer)} type="radio" id="choice2" style={{ margin: "4px" }} name="choice" value="json.choices[2].Choice" required />
                                                <label htmlFor="choice2" style={{ marginRight: "10px" }}>${json.choices[2].Choice}</label>
                                                <p class="card-text"> ${json.choices[2].IsAnswer}</p>
                                                <input onChange={this.setAnswer(json.choices[3].IsAnswer)} type="radio" id="choice3" style={{ margin: "4px" }} name="choice" value="json.choices[3].Choice" required />
                                                <label htmlFor="choice3" style={{ marginRight: "10px" }}>${json.choices[3].Choice}</label>
                                                <p class="card-text"> ${json.choices[3].IsAnswer}</p>
                                                <input onChange={this.setAnswer(json.choices[4].IsAnswer)} type="radio" id="choice4" style={{ margin: "4px" }} name="choice" value="json.choices[4].Choice" required />
                                                <label htmlFor="choice4" style={{ marginRight: "10px" }}>${json.choices[4].Choice}</label>
                                                <p class="card-text"> ${json.choices[4].IsAnswer}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick={this.submitHandler} >Submit</button>
                                    </form>

                                </div>
                            
                        </div>`
                    }
                    else {
                        z += `<div class="col-sm-10" style="padding:20px 55px 25px">
                        <div class="card border-dark">
                                <form onSubmit={this.submitHandler} className="instructor-form">
                                <div class="card-header"><h2>${json.questionTitle}</h2></div>
                                <p class="card-text">Points: ${json.points}</p>
                                <p class="card-text"> ${json.questionText}</p>
                                <div className="form-group">
                                    <label>Reponse:</label><br>
                                    <input type="text" onChange={this.submitHandler} className="form-control" placeholder="Enter reponse" name="TextboxAnswer" required />
                                </div>
                                <button type="button" onClick={${this.submitHandler}} >Submit</button> 
                            </form>
                            <p class="card-text"> ${json.textboxAnswer}</p>
                            </div>
                        </div>

                    </div>`
                    }

                    // Dynamically add the question card
                    x.innerHTML += z;

                })
                .catch(err => alert(err.message));
        })

    }

    render() {

        return (

            <div className="content" style={{ margin: "0 auto" }}>
                <h2>{this.props.questionSetName}</h2>
                <div id="list-questions"> <h4>Loading questions...</h4></div>

            </div>

        )
    }

}

export default ShowClasswork;
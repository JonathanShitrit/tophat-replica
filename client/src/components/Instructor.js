import React, { Component } from "react";
import "../instructor.css";
import "../index.css";
import CreateSet from "./CreateSet";
import CreateQuestion from "./CreateQuestion";
import axios from "axios";
// import ShowQuestions from "./ShowQuestions";
import ShowSet from "./ShowSet";


class Instructor extends Component {
    state = {
        questionSets: [],
        type: "",
        QuestionTitle: "",
        Points: 0,
        QuestionType: "",
        QuestionText: "",
        Choices: [],
        TextboxAnswer: "",
        content: "ADDSET",
        questionSetName: "",
        allQuestions: []
    };



    componentDidMount() {
        this.loadQuestionSets();
        this.loadAllQuestions();

    }

    loadAllQuestions = () => {
        fetch(`${document.location.origin}/api/questions/questions`)
            .then(response => response.json())
            .then(json => {
                this.setState({ allQuestions: json })
                console.log("questions", json);
            })
            .catch(err => alert(err.message));
    }

    loadQuestionSets = () => {
        fetch(`${document.location.origin}/api/questions/questionset`)
            .then(response => response.json())
            .then(json => {
                console.log("all sets", json);
                if (json.length > 0) {
                    // Not initial setup
                    this.setState({ content: "ADDQUESTION" });
                }
                this.setState({ questionSets: json });
            })
            .catch(err => alert(err.message));
    }

    changeHandler = (e) => {
        // const field = e.target.name;
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    onSubmit = (e) => {
        var x = document.getElementsByClassName("isAnswerCheckbox");
        var z = document.getElementsByClassName("choice");
        const a = [];
        for (var i = 0; i < x.length; i++) {
            a[i] = {};
            a[i].IsAnswer = x[i].checked;
            a[i].Choice = z[i].value;
        }


        this.setState({ Choices: [...a] },
            () => {
                // Add a question to question set and list of questions
                console.log(this.state.QuestionTitle);
                console.log(this.state.QuestionType);
                console.log(this.state.QuestionText);
                console.log(this.state.Points);
                console.log(this.state.Choices[0]);
                console.log(this.state.Choices[1]);
                console.log(this.state.Choices[2]);
                console.log(this.state.Choices[3]);
                console.log(this.state.Choices[4]);
                console.log(this.state.TextboxAnswer);

                this.postQuestionToDB();
            });

    }

    postQuestionToDB = () => {
        axios.post(`${document.location.origin}/api/questions/questionstophat`, {
            questionTitle: this.state.QuestionTitle,
            questionType: this.state.QuestionType,
            questionText: this.state.QuestionText,
            points: this.state.Points,
            textboxAnswer: this.state.TextboxAnswer,
            choices: [...this.state.Choices]
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response);
            // window.alert("Successfully added question!");
        }).catch(error => {
            console.log(error.response)
        });
    }


    addSet = () => {
        this.setState({ content: "ADDSET" });
    }

    addQuestion = () => {
        this.setState({ content: "ADDQUESTION" });
    }

    showSet = (setName) => {
        this.setState({ content: "SHOWSET" });
        this.setState({ questionSetName: setName });
    }

    // showQuestions = () => {
    //     this.setState({ content: "SHOWQUESTIONS" });
    // }

    render() {

        return (
            <div className="" style={{ paddingTop: "62px", width: "100%" }}>
                <div className="row no-gutters">
                    <nav className="sidebar col-2" style={{ position: "fixed", left: "0", top: "0", zIndex: "5", paddingTop: "62px" }}>
                        <h2>Question Sets</h2>

                        <ul className="list-unstyled">

                            <li><button style={{ marginBottom: "6px" }} onClick={this.addSet}>New set &#10010;</button></li>
                            <li><button style={{ marginBottom: "6px" }} onClick={this.addQuestion}>New question &#10010;</button></li>
                            {/* <li><button style={{ marginBottom: "6px" }} onClick={this.showQuestions}>All questions</button></li> */}

                            {this.state.questionSets.map(item => {
                                return (
                                    <li key={item.questionSetName}><a className="set-link" onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a></li>
                                )
                            })}

                        </ul>
                    </nav>
                    <div className="col-10" style={{ marginLeft: "16.6%" }}>
                        {(() => {
                            switch (this.state.content) {
                                case "ADDSET":
                                    return <CreateSet questions={this.state.allQuestions} />;

                                case "ADDQUESTION":
                                    return <CreateQuestion
                                        QuestionType={this.state.QuestionType}
                                        changeHandler={this.changeHandler}
                                        onSubmit={this.onSubmit}
                                    />;

                                case "SHOWSET":
                                    return <ShowSet
                                        key={this.state.questionSetName}
                                        questionSetName={this.state.questionSetName} />;

                                // case "SHOWQUESTIONS":
                                //     return <ShowQuestions />;
                                default: return;
                            }
                        })()}

                    </div>
                </div>
            </div >

        )
    }
}

export default Instructor;
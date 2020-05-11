import React, { Component } from "react";
import "../instructor.css";
import "../index.css";
import "../questionSet.json";
import "../questions.json";
import GetStarted from "./GetStarted";
import CreateQuestion from "./CreateQuestion";


class Instructor extends Component {
    state = {
        questionSets: [], added: false, type: "",
        QuestionTitle: "",
        QuestionType: "",
        QuestionText: "",
        Choices: [],
        TextboxAnswer: "",
        getStarted: true
    };



    componentDidMount() {
        fetch(`${document.location.origin}/questionset`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if (json.length > 0) {
                    // Not initial setup
                    this.setState({ getStarted: false });
                }
                this.setState({ questionSets: json });
            })
            .catch(err => alert(err.message));

    }

    toggleAdd = () => {
        this.setState({ added: !this.state.added });
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
                console.log(this.state.Choices[0]);
                console.log(this.state.Choices[1]);
                console.log(this.state.Choices[2]);
                console.log(this.state.Choices[3]);
                console.log(this.state.Choices[4]);
                console.log(this.state.TextboxAnswer);
            });

    }


    createSet = () => {
        this.setState({ getStarted: true });
        // const myobj = this.state.questionSets;
        // myobj.push({ "name": "", "questions": [] });
        // this.setState({ questionSets: myobj });
    }

    render() {

        return (
            <div className="" style={{ marginTop: "62px", height: "90vh", overflowY: "auto", width: "100%" }}>
                <div className="row no-gutters">
                    <nav className="sidebar col-2" style={{ position: "fixed", left: "0", top: "0", zIndex: "5", paddingTop: "62px" }}>
                        <h2>Question Sets</h2>

                        <ul className="list-unstyled">

                            <li><button style={{ marginBottom: "6px" }} onClick={this.createSet}>Create a new set &#10010;</button></li>
                            {this.state.questionSets.map(item => {
                                return (
                                    <li key={item.name}><a>{item.name}</a></li>
                                )
                            })}

                        </ul>
                    </nav>
                    <div className="col-10" style={{ marginLeft: "16.6%" }}>
                        {this.state.getStarted ? (
                            <GetStarted />
                        ) : (
                                <CreateQuestion
                                    added={this.state.added}
                                    QuestionType={this.state.QuestionType}
                                    toggleAdd={this.toggleAdd}
                                    changeHandler={this.changeHandler}
                                    onSubmit={this.onSubmit}
                                />
                            )}

                    </div>
                </div>
            </div >

        )
    }
}

export default Instructor;
import React, { Component } from "react";
import "../student.css";
import "../index.css";
import axios from "axios";
import ShowClasswork from "./ShowClasswork";


class Student extends Component {
    state = {
        questionSets: [],
        type: "",
        QuestionTitle: "",
        Points: 0,
        QuestionType: "",
        QuestionText: "",
        Choices: [],
        TextboxAnswer: "",
        content: "SHOWSTREAM",
        questionSetName: "",
        allQuestions: [],

        displayClassworkType: false
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

    showSet = (setName) => {
        this.setState({ content: "SHOWSET" });
        this.setState({ questionSetName: setName });
    }

    showStream = () => {
        this.setState({ content: "SHOWSTREAM" });
    }

    toggleDisplayClassworkType = () => {
        this.setState({ displayClassworkType: !this.state.displayClassworkType });
    }

    render() {

        return (
            // <div className="" style={{ paddingTop: "62px", width: "100%" }}>
            //     <div className="row no-gutters">
            //         <nav className="sidebar col-2" style={{ position: "fixed", left: "0", top: "0", zIndex: "5", paddingTop: "62px" }}>
            //             <h2>Dashboard</h2>

            //             <ul className="list-unstyled">
            //                 <li><button style={{ marginBottom: "6px" }} onClick={() => this.showStream}>Stream</button></li>
            //                 <li><button style={{ marginBottom: "6px" }} >To Do</button></li>
            //                 {
            //                 this.state.displayClassworkType ? ( 
            //                     <div> 
            //                         <li><button style={{ marginBottom: "6px" }} onClick={this.toggleDisplayClassworkType}>Classwork</button></li>
            //                         {/*<li><button style={{ marginBottom: "6px" }} onClick={this.showSet}>All Classwork</button></li> */}
            //                         {this.state.questionSets.map(item => {
            //                             return (
            //                                 <li key={item.questionSetName}><a className="set-link" onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a></li>
            //                             )
            //                          })}
            //                         <li><button style={{ marginBottom: "6px" }}>Assignments</button></li>
            //                         <li><button style={{ marginBottom: "6px" }}>Exams</button></li>
            //                     </div>
            //                     ) : (
            //                     <div>
            //                         <li><button style={{ marginBottom: "6px" }} onClick={this.toggleDisplayClassworkType}>Classwork</button></li>
            //                     </div>

            //                     )
            //                  }   
            //                 <li><button style={{ marginBottom: "6px" }} >Gradebook</button></li>

            //             </ul>
            //         </nav>


            //         {/* <div className="col-10" style={{ marginLeft: "16.6%" }}>
            //             {this.state.questionSets.map(item => {
            //                         return (
            //                             <li key={item.questionSetName}><a onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a></li>

            //                         )
            //                     })}
            //         </div> */}

            //         <div className="col-10" style={{ marginLeft: "16.6%" }}>

            //             {(() => {
            //                 switch (this.state.content) {

            //                     case "SHOWSTREAM":
            //                         return 
            //                             <div className="col-10" style={{ marginLeft: "16.6%" }}>
            //                                 <p>Hello.........</p>
            //                                 {this.state.questionSets.map(item => {

            //                                         <li key={item.questionSetName}><a onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a></li>


            //                                  })}
            //                             </div>

            //                     case "SHOWSET":

            //                         return <ShowClasswork
            //                             key={this.state.questionSetName}
            //                             questionSetName={this.state.questionSetName} 
            //                             />;


            //                     default:                                     
            //                         return;        
            //                 }
            //             })()}

            //         </div>
            //     </div>
            // </div >

            <div style={{ height: "100%" }}>
                <div className="w3-sidebar w3-light-grey w3-bar-block w3-card" style={{ maxHeight: "90%" }}>
                    <h2 className="w3-bar-item">Dashboard</h2>

                    <a class="w3-bar-item w3-button w3-border-bottom" onClick={() => this.showStream}>Stream</a>
                    <a class="w3-bar-item w3-button w3-border-bottom" >To Do</a>
                    {
                        this.state.displayClassworkType ? (
                            <div>
                                <a className="w3-bar-item w3-button w3-border-bottom" onClick={this.toggleDisplayClassworkType}>Classwork</a>

                                {this.state.questionSets.map(item => {
                                    return (

                                        <a key={item.questionSetName} className="w3-bar-item w3-button w3-border-bottom" onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a>

                                    )
                                })}
                                <a className="w3-bar-item w3-button w3-border-bottom" >Assignments</a>
                                <a className="w3-bar-item w3-button w3-border-bottom" >Exams</a>

                            </div>
                        ) : (
                                <a className="w3-bar-item w3-button w3-border-bottom" onClick={this.toggleDisplayClassworkType}>Classwork</a>
                            )
                    }
                    <a className="w3-bar-item w3-button w3-border-bottom" >Gradebook</a>

                </div>


                <div className="main" style={{ height: "100%" }}>

                    {(() => {
                        switch (this.state.content) {

                            case "SHOWSTREAM":
                                return (
                                    <div className="content" style={{ height: "100%" }}>
                                        <p>Loading Questions...</p>
                                        {this.state.questionSets.map(item => {

                                            <li key={item.questionSetName}><a onClick={() => this.showSet(item.questionSetName)}>{item.questionSetName}</a></li>


                                        })}
                                    </div>
                                )

                            case "SHOWSET":

                                return <ShowClasswork
                                    key={this.state.questionSetName}
                                    questionSetName={this.state.questionSetName}
                                />;


                            default:
                                return;
                        }
                    })()}

                </div>
            </div>


        )
    }
}

export default Student;
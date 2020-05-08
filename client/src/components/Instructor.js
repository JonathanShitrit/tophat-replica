import React, { Component } from "react";
import "../instructor.css";
import "../index.css";
import "../questionSet.json";
import "../questions.json";

const MultipleChoice = (props) => (
    <div>
        <div className="form-group">
            <label>Choice 1</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" />
            <div className="is-answer">
                <label htmlFor="1">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="1" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 2</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" />
            <div className="is-answer">
                <label htmlFor="2">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="2" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 3</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" />
            <div className="is-answer">
                <label htmlFor="3">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="3" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 4</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" />
            <div className="is-answer">
                <label htmlFor="4">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="4" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 5</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" />
            <div className="is-answer">
                <label htmlFor="5">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="5" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
    </div>
)

const Textbox = (props) => (
    <div>
        <div className="form-group">
            <label>Correct answer (not case sensitive)</label>
            <input type="text" onChange={props.changeHandler} data-parse="lowercase" className="form-control" placeholder="Enter correct answer to question" name="TextboxAnswer" />
        </div>
    </div>
)


// {
//     "QuestionNumber": "Q1",
//         "QuestionType": "MULTIPLE",
//             "QuestionText": "Who was NOT the first president of USA?",
//                 "Choices": [
//     {
//         "Choice": "Abraham Lincoln",
//         "IsAnswer": "True"
//     },
//     {
//         "Choice": "George Washington",
//         "IsAnswer": "False"
//     },
//     {
//         "Choice": "John F. Kennedy",
//         "IsAnswer": "True"
//     }
// ],
//                     "TextboxAnswer": ""
// }

class Instructor extends Component {
    state = {
        questionSets: [], added: false, type: "",
        QuestionNumber: "",
        QuestionType: "",
        QuestionText: "",
        Choices: [],
        TextboxAnswer: ""
    };



    componentDidMount() {
        fetch(`${document.location.origin}/questionset`)
            .then(response => response.json())
            .then(json => this.setState({ questionSets: json }))
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
                for (var i = 0; i < this.state.Choices.length; i++) {
                    console.log(this.state.Choices[i]);
                }
            });

        console.log(this.state.QuestionNumber);
        console.log(this.state.QuestionType);
        console.log(this.state.QuestionText);
        console.log(this.state.TextboxAnswer);

    }


    createSet = () => {
        const myobj = this.state.questionSets;
        myobj.push({ "name": "", "questions": [] });
        this.setState({ questionSets: myobj });
    }

    render() {

        return (
            <div className="top">
                <div className="row no-gutters">
                    <nav id="sidebar" className="col-2">
                        <div className="sidebar-header">
                            <h2>Question Sets</h2>
                        </div>

                        <ul className="list-unstyled components">
                            <li><button onClick={this.createSet}>Create a new set &#10010;</button></li>
                            {this.state.questionSets.map(item => {
                                return (
                                    <li key={item.name}><a>{item.name}</a></li>
                                )
                            })}

                        </ul>
                    </nav>
                    <div className="col-lg content">
                        <div class="new-question">
                            <button style={{ display: "block" }} onClick={this.toggleAdd}>Create a new question &#10010;</button>
                            {this.state.added ? (
                                <form onSubmit={this.onSubmit} >
                                    <h2>New Question</h2>

                                    <div className="form-group">
                                        <label>Question Title</label>
                                        <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Enter title" name="QuestionNumber" />
                                    </div>

                                    <div className="form-group">
                                        <label>Question</label>
                                        <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Enter question" name="QuestionText" />
                                    </div>

                                    <div className="form-group">
                                        <label>Type</label>
                                        <div className="custom-control custom-checkbox">
                                            <input onChange={this.changeHandler} type="radio" id="multiple" style={{ margin: "4px" }} name="QuestionType" value="MULTIPLE" />
                                            <label htmlFor="multiple" style={{ marginRight: "10px" }}>Multiple Choice</label>
                                            <input onChange={this.changeHandler} type="radio" id="textbox" style={{ marginLeft: "10" }} name="QuestionType" value="TEXTBOX" />
                                            <label htmlFor="textbox" style={{ margin: "4px" }}>Textbox</label>
                                        </div>
                                    </div>

                                    {(() => {
                                        switch (this.state.QuestionType) {
                                            case "MULTIPLE": return <MultipleChoice />;
                                            case "TEXTBOX": return <Textbox changeHandler={this.changeHandler} />;
                                            default: return;
                                        }
                                    })()}

                                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create question</button>

                                </form>
                            ) : (<div></div>)}

                        </div>
                    </div>
                    {/* <div className="col-lg content">
                        <div class="new-question">
                            <p>Create a new question <a>&#10010;</a></p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row no-gutters">
                    <div className="col-lg content">
                        <div class="new-question">
                            <p>Create a new question <a>&#10010;</a></p>
                        </div>
                    </div>
                </div> */}
            </div>
            // <div className="body">
            //     <nav id="sidebar">
            // <div className="sidebar-header">
            //     <h2>Instructor Page</h2>
            // </div>

            // <ul className="list-unstyled components">
            //     <li>
            //         <a>Create new Question Set</a>
            //     </li>

            // </ul>
            //     </nav>

            //     <div className="content">
            //         <div className="initial">
            //             <form>
            //                 <h2>Sign in</h2>

            //                 <div className="form-group">
            //                     <label>Email address</label>
            //                     <input type="email" className="form-control" placeholder="Enter email" />
            //                 </div>

            //                 <div className="form-group">
            //                     <label>Password</label>
            //                     <input type="password" className="form-control" placeholder="Enter password" />
            //                 </div>

            //                 <button type="submit" className="btn btn-primary btn-block btn-lg">Sign in</button>
            //                 <p className="forgot-password text-right">
            //                     Don't have an account <button onClick={this.toggelSignin}>sign up</button>
            //                 </p>
            //             </form>
            //         </div>
            //     </div>
            // </div>

        )
    }
}

export default Instructor;
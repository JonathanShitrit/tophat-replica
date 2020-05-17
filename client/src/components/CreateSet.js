import React, { Component } from "react";
import axios from "axios";
import ShowQuestions from "./ShowQuestions";

class CreateSet extends Component {
    state = { questionSetName: "", questionsToSave: [] }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    onSubmit = (e) => {
        var x = document.getElementsByClassName("questionsCheckbox");
        const a = [];
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                a.push(x[i].value);
                console.log(i, x[i].value);
            }
        }

        this.setState({ questionsToSave: [...a] },
            () => {
                // Add a question to question set and list of questions
                this.postQuestionsToDB(this.state.questionsToSave);
            }
        );

    }

    postQuestionsToDB = (tmp) => {
        axios.post(`${document.location.origin}/api/questions/questionset`, {
            questionSetName: this.state.questionSetName,
            questions: [...tmp],
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response);
            // window.alert("Successfully added question-set!");
        }).catch(error => {
            console.log(error.response)
        });
    }

    render() {
        return (
            <div className="content">
                <h2>Create a new question set to get started.</h2>

                <form onSubmit={this.onSubmit} className="instructor-form" >
                    <div className="form-group">
                        <label>Question Set Name</label>
                        <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Enter title" name="questionSetName" required />
                    </div>

                    <div>
                        <h3>Add questions to set.</h3>
                        <br />
                        {this.props.questions.length > 0 ? (
                            this.props.questions.map(item => {
                                // Loop over all questions
                                return (
                                    <ShowQuestions item={item} />
                                )
                            })
                        ) : (<h5>There are currently no questions to add</h5>)
                        }
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create set</button>

                </form>
            </div>
        )
    }
}


export default CreateSet;
import React, { Component } from "react";
import QuestionBox from "./QuestionBox";

class ShowClasswork extends Component {

    state = {
        questions: [],
        questionsIds: [],
        questionSetName: "",

        score: 0,
        pointTotal: 0,

        multiChoiceAnswer: Boolean,

        displayQuestion: true,
        qsQuestions: [],

        textboxQuestionIndex: -1,

        displayAssignment: true
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

    submitHandler = () => {
        alert('Submission succcessful');
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

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    getSetsQuestions = (ids) => {
        var a = [];

        // Loop over this set's questions array and fetch each question's data
        ids.map(id => {
            fetch(`${document.location.origin}/api/questions/questions/${id}`)
                .then(response => response.json())
                .then(json => {
                    a.push(json);
                    this.setState({ qsQuestions: a });
                })
                .catch(err => alert(err.message));
        })

    }

    foo = (question) => {
        if (question.questionType != "MULTIPLE")
        {
            this.setState({ textboxQuestionIndex: this.state.textboxQuestionIndex + 1 })
        }    
        return this.state.textboxQuestionIndex;
    }

    toggleDisplayAssignment = () => {
        this.setState({ displayAssignment: !this.state.displayAssignment });
    } 

    render() {
        return (

            this.state.displayAssignment ? (

                <div className="content" style={{ margin: "0 auto" }}>
                <h2>{this.props.questionSetName}</h2>
                <div>
                    <form id="list-questions" className="row justify-content-center" onSubmit={this.submitHandler}>

                        {this.state.qsQuestions.length > 0 && this.state.qsQuestions.map(question => (  


                            
            
                        
                            
                            <QuestionBox

                                question={question}
                                key={question._id}
                                //textboxQuestionIndex={this.state.textboxQuestionIndex}
                                //textboxQuestionIndex={foo(quesiton)}

                                /*
                                textboxQuestionIndex={
                                (question.questionType === "TEXTBOX") ? (
                                    this.setState({ textboxQuestionIndex: this.state.textboxQuestionIndex + 1 })
                                    return (this.state.textBoxQuestionIndex)
                                    
                                ) : (
                                    this.setState({ textboxQuestionIndex: this.state.textboxQuestionIndex })
                                    return (this.state.textBoxQuestionIndex)));
                                )}
                                */
                            
 
                                    
                            />
                        ))
                        

                        
                        }
                        
                        <br />
                        <button type="button" className="col-8" onClick={this.toggleDisplayAssignment} >Complete Assignment</button>
                    </form>
                </div>

            </div>
                ) : (

                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                    <div className="card border-dark">
                        <div className="card-header">
                            <h2>{this.props.questionSetName}</h2>

                        </div>
                        
                        <div style={{ padding: "20px 45px 25px" }}>
                            <p>{"Assignment completed"}</p>
                            <br/>
                            <p>{"Your score is"}</p>
                            <button input="button" onClick={this.toggleDisplayAssignment}>Resubmit</button>
                        </div>
                    </div>
                </div>  
                
            )
                

            

        )
    }

}





export default ShowClasswork;
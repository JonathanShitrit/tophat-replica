import React, { Component } from "react";


class CreateQuestion extends Component {

    render() {
        return (
            <div className="content">
                {this.props.added ? (
                    <form onSubmit={this.props.onSubmit} className="my-form" >
                        <h2>New Question</h2>

                        <div className="form-group">
                            <label>Question Title</label>
                            <input type="text" onChange={this.props.changeHandler} className="form-control" placeholder="Enter title" name="QuestionTitle" required />
                        </div>

                        <div className="form-group">
                            <label>Question</label>
                            <input type="text" onChange={this.props.changeHandler} className="form-control" placeholder="Enter question" name="QuestionText" required />
                        </div>

                        <div className="form-group">
                            <label>Type</label>
                            <div className="custom-control custom-checkbox">
                                <input onChange={this.props.changeHandler} type="radio" id="multiple" style={{ margin: "4px" }} name="QuestionType" value="MULTIPLE" required />
                                <label htmlFor="multiple" style={{ marginRight: "10px" }}>Multiple Choice</label>
                                <input onChange={this.props.changeHandler} type="radio" id="textbox" style={{ marginLeft: "10" }} name="QuestionType" value="TEXTBOX" required />
                                <label htmlFor="textbox" style={{ margin: "4px" }}>Textbox</label>
                            </div>
                        </div>

                        {(() => {
                            switch (this.props.QuestionType) {
                                case "MULTIPLE": return <MultipleChoice />;
                                case "TEXTBOX": return <Textbox changeHandler={this.props.changeHandler} />;
                                default: return;
                            }
                        })()}

                        {this.props.QuestionType ? (
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Create question</button>
                        ) : (<div></div>)}

                    </form>
                ) : (
                        <button style={{ display: "block" }} onClick={this.props.toggleAdd}>Create a new question &#10010;</button>
                    )}

            </div>
        )
    }
}

const MultipleChoice = (props) => (
    <div>
        <div className="form-group">
            <label>Choice 1</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" required />
            <div className="is-answer">
                <label htmlFor="1">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="1" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 2</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" required />
            <div className="is-answer">
                <label htmlFor="2">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="2" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 3</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" required />
            <div className="is-answer">
                <label htmlFor="3">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="3" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 4</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" required />
            <div className="is-answer">
                <label htmlFor="4">Correct answer? </label>
                <input type="checkbox" onChange={props.changeHandler} id="4" className="isAnswerCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} name="IsAnswer" />
            </div>
        </div>
        <div className="form-group">
            <label>Choice 5</label>
            <input type="text" onChange={props.changeHandler} className="form-control choice" placeholder="Enter value" name="Choice" required />
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
            <input type="text" onChange={props.changeHandler} data-parse="lowercase" className="form-control" placeholder="Enter correct answer to question" name="TextboxAnswer" required />
        </div>
    </div>
)


export default CreateQuestion;
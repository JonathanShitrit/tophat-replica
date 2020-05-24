import React from "react";

const QuestionBox = ({ question, changeHandler, setAnswer }) => {

    if (question.questionType === "MULTIPLE") {
        return (
            <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                <div className="card border-dark">
                    <div className="card-header">
                        <h2>{question.questionTitle}</h2>
                    </div>
                    <div style={{ padding: "20px 45px 25px" }}>
                        <p className="card-text">{question.questionText}</p>

                        <div className="form-group">
                            <input type="checkbox" id="choice0" style={{ margin: "4px" }} name="choice" value={question.choices[0].Choice} required />
                            <label for="choice0" style={{ marginRight: "10px" }}>{question.choices[0].Choice}</label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="choice1" style={{ margin: "4px" }} name="choice" value={question.choices[1].Choice} required />
                            <label for="choice1" style={{ marginRight: "10px" }}>{question.choices[1].Choice}</label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="choice2" style={{ margin: "4px" }} name="choice" value={question.choices[2].Choice} required />
                            <label for="choice2" style={{ marginRight: "10px" }}>{question.choices[2].Choice}</label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="choice3" style={{ margin: "4px" }} name="choice" value={question.choices[3].Choice} required />
                            <label for="choice3" style={{ marginRight: "10px" }}>{question.choices[3].Choice}</label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="choice4" style={{ margin: "4px" }} name="choice" value={question.choices[4].Choice} required />
                            <label for="choice4" style={{ marginRight: "10px" }}>{question.choices[4].Choice}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                <div className="card border-dark">
                    <div className="card-header">
                        <h2>{question.questionTitle}</h2>
                    </div>
                    <div style={{ padding: "20px 45px 25px" }}>
                        <p className="card-text">Points: {question.points}</p>
                        <p className="card-text">{question.questionText}</p>
                        <div className="form-group">
                            <label>Reponse:</label>
                            <br />
                            <input type="text" className="form-control" placeholder="Enter reponse" name="TextboxAnswer" required />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionBox;
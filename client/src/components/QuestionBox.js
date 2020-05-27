import React, { useState } from "react";

score_ = 0;
//global.score_ = score;
totalPoints_ = 0;
//global.totalPoints_ = totalPoints;

const QuestionBox = ({ question, textboxQuestionIndex }) => {

    // Testing
    
    const [checked, setChecked] = useState(false);
    const setCheckCheck = () => {setChecked(!checked)}

    // General question data

    /*
    const [score, setScore] = useState(0);
    const setScore_ = () => {setScore(score + question.points)}

    const [points, setPoints] = useState(0);
    const setPoints_ = () => {setPoints(points + question.points)}
    */

    
    const [assignmentScores, setAssignmentScores] = useState([])
    //setAssignmentScores(assignmentScores => assignmentScores.concat(score))
    global.assignmentScores = assignmentScores;
    //global.setAssignmentScores(assignmentScores => assignmentScores.concat(score)) = setAssignmentScores(assignmentScores => assignmentScores.concat(score))

    const [assignmentPoints, setAssignmentPoints] = useState([])
    //setAssignmentPoints(assignmentPoints => assignmentPoints.concat(points))
    global.assignmentPoints = assignmentPoints;
    //global.setAssignmentPoints(assignmentPoints => assignmentPoints.concat(points)) = setAssignmentPoints(assignmentPoints => assignmentPoints.concat(points))

    // Multi-choice

    const [multiChoiceAnswer, setMultiChoiceAnswer] = useState(5);
    const [checkMultiChoiceAnswer, setCheckMultiChoiceAnswer] = useState(false);
    
    const setMultiChoiceAnswerAs0 = () => {setMultiChoiceAnswer(0)}
    const setMultiChoiceAnswerAs1 = () => {setMultiChoiceAnswer(1)}
    const setMultiChoiceAnswerAs2 = () => {setMultiChoiceAnswer(2)}
    const setMultiChoiceAnswerAs3 = () => {setMultiChoiceAnswer(3)}
    const setMultiChoiceAnswerAs4 = () => {setMultiChoiceAnswer(4)}
    
    const setCheckMultiChoiceAnswer_ = () => {  
        setCheckMultiChoiceAnswer(question.choices[multiChoiceAnswer].IsAnswer);
        //event.preventDefault(); 
    }

    
    const checkAnswer_ = () => {
        toggleDisplayQuestion();
        addPoints();
        //event.preventDefault(); 
    }
    

    const addPoints = () => {
        if (checkMultiChoiceAnswer) {
            setAssignmentScores(assignmentScores => assignmentScores.concat(question.points));
            score_ = score_ + question.points;
        }
        setAssignmentPoints(assignmentPoints => assignmentPoints.concat(question.points));
        totalPoints_ = totalPoints_ + question.points;
        //event.preventDefault(); 
    }

    // Textbox

    const [textboxAnswer, setTextboxAnswer] = useState("wrong");
    const [checkTextboxAnswer, setCheckTextboxAnswer] = useState(false);

    const setTextboxAnswer_ = () => {
        //setTextboxAnswer( String( document.getElementsByName('TextboxAnswer')[(textboxQuestionIndex)].value) );
        setTextboxAnswer( document.getElementsByName('TextboxAnswer')[(textboxQuestionIndex)].value );
        //event.preventDefault();        
        setTextboxQuestionI_();
    }

    const setCheckTextboxAnswer_ = () => {
        //event.preventDefault();
        toggleDisplayQuestion();
        addPointsText();
        resetTextboxAnswer();
        //event.preventDefault();
    }

    const addPointsText = () => {
        if ( textboxAnswer == question.textboxAnswer ) {
            //setCheckTextboxAnswer(true);
            setAssignmentScores(assignmentScores => assignmentScores.concat(question.points));
            score_ = score_ + question.points;
        }
        setAssignmentPoints(assignmentPoints => assignmentPoints.concat(question.points));
        totalPoints_ = totalPoints_ + question.points;
    }

    const resetTextboxAnswer = () => {
        setTextboxAnswer("wrong");
        setCheckTextboxAnswer(false); 
    }

    // Toggle

    const [displayQuestion, setDisplayQuestion] = useState(true);

    const toggleDisplayQuestion = () => {
        setDisplayQuestion(!displayQuestion);
        //event.preventDefault();
    }

    const [displayAssignment, setDisplayAssignment] = useState(true);

    const toggleDisplayAssignment = () => {
        setDisplayAssignment(!displayAssignment);
    }


    if (question.questionType === "MULTIPLE") {
        return (
            displayQuestion ? (

                <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        {/* <div>{String(global.assignmentScores)}</div>
                        <div>{String(global.assignmentPoints)}</div> */}
                        {/* <div>{String(score_)}</div>
                        <div>{String(totalPoints_)}</div> */}
                    <div className="card border-dark">
                        <div className="card-header">
                            <h2>{question.questionTitle}</h2>
                        </div>
                        <div style={{ padding: "20px 45px 25px" }}>
                            <p className="card-text">Points: {question.points}</p>
                            <p className="card-text">{question.questionText}</p>
                            
                            <div>
                                <input type="checkbox" id="choice0" onChange={setMultiChoiceAnswerAs0} style={{ margin: "4px" }} name="choice" value={question.choices[1].Choice} />
                                <label for="choice0" style={{ marginRight: "10px" }}>{question.choices[0].Choice}</label>
                            </div>
                            {/* <div>Is checked? {String(checked)}</div> */}
                            <div>
                                <input type="checkbox" id="choice1" onChange={setMultiChoiceAnswerAs1} style={{ margin: "4px" }} name="choice" value={question.choices[1].Choice} />
                                <label for="choice1" style={{ marginRight: "10px" }}>{question.choices[1].Choice}</label>
                            {/* <div>Is marked as answer? {String(multiChoiceAnswer)}</div> */}
                            </div>
                            <div>
                                <input type="checkbox" id="choice2" onChange={setMultiChoiceAnswerAs2} style={{ margin: "4px" }} name="choice" value={question.choices[2].Choice} />
                                <label for="choice2" style={{ marginRight: "10px" }}>{question.choices[2].Choice}</label>
                            </div>
                            <div>
                                <input type="checkbox" id="choice3" onChange={setMultiChoiceAnswerAs3} style={{ margin: "4px" }} name="choice" value={question.choices[3].Choice} />
                                <label for="choice3" style={{ marginRight: "10px" }}>{question.choices[3].Choice}</label>
                            </div>
                            <div>
                                <input type="checkbox" id="choice4" onChange={setMultiChoiceAnswerAs4} style={{ margin: "4px" }} name="choice" value={question.choices[4].Choice} />
                                <label for="choice4" style={{ marginRight: "10px" }}>{question.choices[4].Choice}</label>
                            </div>
                            <button input="button" onClick={setCheckMultiChoiceAnswer_}>Save answer</button>
                            <p/>
                            <button input="button" onClick={checkAnswer_}>Submit</button>
                            {/* <div>Did you get the correct answer? {String(checkMultiChoiceAnswer)}</div> */}
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        {/* <div>{String(global.assignmentScores)}</div>
                        <div>{String(global.assignmentPoints)}</div> */}
                        {/* <div>{String(score_)}</div>
                        <div>{String(totalPoints_)}</div> */}
                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            
                            <div style={{ padding: "20px 45px 25px" }}>
                                {/* <p className="card-text">Points: {question.points}</p> */}
                                <p className="card-text" >{question.questionText}</p>
                                <div>{"You have completed this question."}</div>
                                <br/>
                                {/* <button input="button" onClick={toggleDisplayQuestion}>Change answer</button> */}
                            </div>
                        </div>
                    </div>  
                    )
                );
    }
    else {
            return (            
                displayQuestion ? (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        {/* <div>{textboxQuestionIndex}</div> */}
                        {/* <div>{String(global.assignmentScores)}</div>
                        <div>{String(global.assignmentPoints)}</div> */}
                        {/* <div>{String(score_)}</div>
                        <div>{String(totalPoints_)}</div> */}
                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            <div style={{ padding: "20px 45px 25px" }}>
                                <p className="card-text">Points: {question.points}</p>
                                <p className="card-text" >{question.questionText}</p>
                                <div className="form-group">
                                    <label>Reponse:</label>
                                    <br />
                                    <input type="text" className="form-control" placeholder="Enter reponse" name="TextboxAnswer" />
                                </div>
                                <button input="button" onClick={setTextboxAnswer_}>Save answer</button>
                                {/* <div>{String( textboxAnswer )}</div> */}
                                <p/>
                                
                                <button input="button" onClick={setCheckTextboxAnswer_}>Submit</button>
                                {/* <div>Did you get the correct answer? {String( checkTextboxAnswer )}</div> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        {/* {<div>{textboxQuestionIndex}</div>} */}
                        {/* <div>{String(global.assignmentScores)}</div>
                        <div>{String(global.assignmentPoints)}</div> */}
                        {/* <div>{String(score_)}</div>
                        <div>{String(totalPoints_)}</div> */}
                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            <div style={{ padding: "20px 45px 25px" }}>
                            <p className="card-text" >{question.questionText}</p>
                            <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Response submitted" name="TextboxAnswer" />
                                </div>
                            
                                {/* <p className="card-text">Points: {question.points}</p> */}
                                <div>{"You have completed this question."}</div>
                                <br/>
                                {/* <button input="button" onClick={toggleDisplayQuestion}>Change answer</button> */}
                            </div>
                        </div>
                    </div>  
                    )
            );
    }


}

export default QuestionBox;
import React, { useState } from "react";

const QuestionBox = ({ question, textboxQuestionIndex }) => {


    
    // Testing

    const [checked, setChecked] = useState(false);
    const setCheckCheck = () => {setChecked(!checked)}

    // General question data

    const [score, setScore] = useState(0);
    const setScore_ = () => {setScore(score + question.points)}

    const [totalPoints, setTotalPoints] = useState(0);
    const setTotalPoints_ = () => {setTotalPoints(totalPoints + question.points)}

    // Multi-choice

    const [multiChoiceAnswer, setMultiChoiceAnswer] = useState(5);
    const [checkMultiChoiceAnswer, setCheckMultiChoiceAnswer] = useState(false);
    
    const setMultiChoiceAnswerAs0 = () => {setMultiChoiceAnswer(0)}
    const setMultiChoiceAnswerAs1 = () => {setMultiChoiceAnswer(1)}
    const setMultiChoiceAnswerAs2 = () => {setMultiChoiceAnswer(2)}
    const setMultiChoiceAnswerAs3 = () => {setMultiChoiceAnswer(3)}
    const setMultiChoiceAnswerAs4 = () => {setMultiChoiceAnswer(4)}
    
    const setCheckMultiChoiceAnswer_ = (event) => {  
        setCheckMultiChoiceAnswer(question.choices[multiChoiceAnswer].IsAnswer);
        toggleDisplayQuestion();
        event.preventDefault(); 
    }

    // Textbox

    const [textboxAnswer, setTextboxAnswer] = useState("wrong");
    const [checkTextboxAnswer, setCheckTextboxAnswer] = useState(false);

    
    /*
    const [textboxQuestionIndex, setTextboxQuestionIndex] = useState(0);

    const setTextboxQuestionIndex_ = () => {
        setTextboxQuestionIndex(9);
        
    }
    */

    const setTextboxAnswer_ = (event) => {
        setTextboxAnswer( String( document.getElementsByName('TextboxAnswer')[(0)].value) );
        //setTextboxQuestionIndex(textboxQuestionIndex + 1)
        //setTextboxAnswer( String( document.getElementsById('textboxInput').value) );

        //alert( String( document.getElementsByName('TextboxAnswer')[0].value ) );
        /*
        if ( String(textboxAnswer) == String(question.textboxAnswer) ) {
            setCheckTextboxAnswer(true); 
        }
        */
        event.preventDefault();
    }

    const setCheckTextboxAnswer_ = (event) => {
        if ( String(textboxAnswer) == String(question.textboxAnswer) ) {
            setCheckTextboxAnswer(true);
            setScore_();
        }
        setTotalPoints_();
        resetTextboxAnswer();
        toggleDisplayQuestion();
        event.preventDefault();
        
    }

    const resetTextboxAnswer = () => {
        setTextboxAnswer("");
        setCheckTextboxAnswer(false);   
    }

    const [displayQuestion, setDisplayQuestion] = useState(true);

    const toggleDisplayQuestion = () => {
        setDisplayQuestion(!displayQuestion);
        event.preventDefault();
    }

    const [displayAssignment, setDisplayAssignment] = useState(true);

    const toggleDisplayAssignment = () => {
        setDisplayAssignment(!displayAssignment);
    }

 
/*    
return(
        displayAssignment ? (
            <div>
            {(question.questionType === "MULTIPLE") ? (
                
                    displayQuestion ? (
        
                        <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                            <div className="card border-dark">
                                <div className="card-header">
                                    <h2>{question.questionTitle}</h2>
                                </div>
                                <div style={{ padding: "20px 45px 25px" }}>
        
                                    <p className="card-text">{question.questionText}</p>
                                    
                                    <div>
                                        <input type="checkbox" id="choice0" onChange={setMultiChoiceAnswerAs0} style={{ margin: "4px" }} name="choice" value={question.choices[1].Choice} />
                                        <label for="choice0" style={{ marginRight: "10px" }}>{question.choices[0].Choice}</label>
                                    </div>
                                    <div>Is checked? {String(checked)}</div>
                                    <div>
                                        <input type="checkbox" id="choice1" onChange={setMultiChoiceAnswerAs1} style={{ margin: "4px" }} name="choice" value={question.choices[1].Choice} />
                                        <label for="choice1" style={{ marginRight: "10px" }}>{question.choices[1].Choice}</label>
                                    <div>Is marked as answer? {String(multiChoiceAnswer)}</div>
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
                                    
                                    <div>Did you get the correct answer? {String(checkMultiChoiceAnswer)}</div>
                                </div>
                            </div>
                        </div>
                        ) : (
                            <div className="col-sm-10" style={{ marginBottom: "2%" }}>
        
                                <div className="card border-dark">
                                    <div className="card-header">
                                        <h2>{question.questionTitle}</h2>
                                    </div>
                                    
                                    <div style={{ padding: "20px 45px 25px" }}>
                                        <p className="card-text">Points: {question.points}</p>
                                        <p className="card-text" >{question.questionText}</p>
                                        <div>{"Your answer has been recorded"}</div>
                                        <button input="button" onClick={toggleDisplayQuestion}>Change answer</button>
                                    </div>
                                </div>
                            </div>  
                            )
                        
              ) : (
                displayQuestion ? (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        <div>{String(textboxQuestionIndex)}</div>
                        <div>{String(score)}</div>
                        <div>{String(totalPoints)}</div>
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
                                    <input type="text" id="textboxInput" className="form-control" placeholder="Enter reponse" name="TextboxAnswer" />
                                </div>
                                <button input="button" onClick={setTextboxAnswer_} >Save answer</button>
                                <div>{String( textboxAnswer )}</div>
                                <button input="button" onClick={setCheckTextboxAnswer_}>Submit</button>
                                <div>Did you get the correct answer? {String( checkTextboxAnswer )}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            
                            <div style={{ padding: "20px 45px 25px" }}>
                                <p className="card-text">Points: {question.points}</p>
                                <p className="card-text" >{question.questionText}</p>
                                <div>{"Your answer has been recorded"}</div>
                                <button input="button" onClick={toggleDisplayQuestion}>Change answer</button>
                            </div>
                        </div>
                    </div>  
                    )
            
              )}
              <button input="button" onClick={toggleDisplayAssignment}>Resubmit</button>
            </div>
            
        ) : (
            <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                <div className="card border-dark">
                    <div className="card-header">
                        <h2>{"Assignment Completed"}</h2>
                    </div>
                    
                    <div style={{ padding: "20px 45px 25px" }}>
                        <div>{"Your score is"}</div>
                        <button input="button" onClick={toggleDisplayAssignment}>Resubmit</button>
                    </div>
                </div>
            </div>  
            )
    
*/  


    if (question.questionType === "MULTIPLE") {
        return (
            displayQuestion ? (

                <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                    <div className="card border-dark">
                        <div className="card-header">
                            <h2>{question.questionTitle}</h2>
                        </div>
                        <div style={{ padding: "20px 45px 25px" }}>

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
                            <br/>
                            <button input="button" onClick={setCheckMultiChoiceAnswer_}>Submit</button>
                            {/* <div>Did you get the correct answer? {String(checkMultiChoiceAnswer)}</div> */}
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>

                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            
                            <div style={{ padding: "20px 45px 25px" }}>
                                {/* <p className="card-text">Points: {question.points}</p> */}
                                <p className="card-text" >{question.questionText}</p>
                                <div>{"You have completed this question."}</div>
                                <br/>
                                <button input="button" onClick={toggleDisplayQuestion}>Change answer</button>
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
                        {/* <div>{String(textboxQuestionIndex)}</div>
                        <div>{String(score)}</div>
                        <div>{String(totalPoints)}</div> */}
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
                                    <input type="text" id="textboxInput" className="form-control" placeholder="Enter reponse" name="TextboxAnswer" />
                                </div>
                                <button input="button" onClick={setTextboxAnswer_} >Save answer</button>
                                {/* <div>{String( textboxAnswer )}</div> */}
                                <p/>
                                <button input="button" onClick={setCheckTextboxAnswer_}>Submit</button>
                                {/* <div>Did you get the correct answer? {String( checkTextboxAnswer )}</div> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-sm-10" style={{ marginBottom: "2%" }}>
                        <div className="card border-dark">
                            <div className="card-header">
                                <h2>{question.questionTitle}</h2>
                            </div>
                            
                            <div style={{ padding: "20px 45px 25px" }}>
                                {/* <p className="card-text">Points: {question.points}</p> */}
                                <p className="card-text" >{question.questionText}</p>
                                <div>{"You have completed this question"}</div>
                                <br/>
                                <button input="button" onClick={toggleDisplayQuestion}>Change answer</button>
                            </div>
                        </div>
                    </div>  
                    )
            );
    }

















    
}

export default QuestionBox;
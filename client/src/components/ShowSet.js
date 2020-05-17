import React, { Component } from "react";
import ShowQuestions from "./ShowQuestions";

class ShowSet extends Component {

    state = { questions: [], questionsIds: [], questionSetName: "" }

    componentDidMount() {
        // Get question set
        this.loadQuestionSet();
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


    getSetsQuestions = (ids) => {
        var x = document.getElementById("list-questions");
        x.innerHTML = "";

        // Loop over this set's questions array and fetch each question's data
        ids.map(id => {
            fetch(`${document.location.origin}/api/questions/questions/${id}`)
                .then(response => response.json())
                .then(json => {

                    var z = `<div class="col-sm-6" style='margin-bottom: 2%'>
                        <div class="card border-dark">
                            <div class="card-header"><h2>${json.questionTitle}</h2></div>
                            <div class="card-body">
                                <p class="card-text"> ${json.questionText}</p>
                                <label key=${json._id} htmlFor=${json._id}>Add?</label>
                                <input type="checkbox" value=${json._id} name=${json._id} key=${json._id} id=${json._id} class="questionsCheckbox" style='margin: "4px"; vertical-align: "middle"'/>
                            </div>
                        </div>
                    </div>`

                    // Dynamically add the question card
                    x.innerHTML += z;
                })
                .catch(err => alert(err.message));
        })
    }


    render() {

        return (
            <div>
                <h2>{this.props.questionSetName}</h2>

                <div id="list-questions">
                    <h4>Loading questions...</h4>
                </div>
            </div>
        )
    }

}

// const QuestionCard = (props) => {
//     <div className="col-sm-6" style={{ marginBottom: "2%" }}>
//         <div className="card border-dark" style={{}}>
//             <div class="card-header"><h2>{props.questionTitle}</h2></div>
//             <div className="card-body">
//                 {/* <h2 className="card-title">{item.questionTitle}</h2> */}
//                 <p className="card-text"> {props.questionText}</p>
//                 <label key={props._id} htmlFor={props._id}>Add?</label>
//                 <input type="checkbox" value={props._id} name={props._id} key={props._id} id={props._id} className="questionsCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} />
//             </div>
//         </div>
//     </div>
// }

export default ShowSet;
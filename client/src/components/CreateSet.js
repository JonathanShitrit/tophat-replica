import React, { Component } from "react";
import axios from "axios";

class CreateSet extends Component {
    state = { questionSetName: "", questions: [], questionsIds: [] }

    componentDidMount() {
        fetch(`${document.location.origin}/api/questions/questions`)
            .then(response => response.json())
            .then(json => this.setState({ questions: json }))
            .catch(err => alert(err.message));

    }

    changeHandler = (e) => {
        // const field = e.target.name;
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    onSubmit = (e) => {
        console.log(this.state.name);

        var tmp = [];
        this.state.questions.map(item => {
            console.log("item", item._id);
            tmp.push(item._id);
        })
        // this.setState({questionsIds: [...]})


        // post QS to database.
        this.postQuestionToDB(tmp);
    }

    postQuestionToDB = (tmp) => {
        axios.post(`${document.location.origin}/api/questions/questionset`, {
            questionSetName: this.state.questionSetName,
            questions: [...tmp],
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error.response)
        });
    }

    render() {
        return (
            <div className="content">
                <p style={{ margin: "2%", textAlign: "center" }}>Create a new question set to get started.</p>
                <form onSubmit={this.onSubmit} className="instructor-form" >
                    <div className="form-group">
                        <label>Question Set Name</label>
                        <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Enter title" name="questionSetName" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create set</button>

                </form>
            </div>
        )
    }
}

export default CreateSet;
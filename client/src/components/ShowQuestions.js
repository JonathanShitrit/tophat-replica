import React, { Component } from "react";


class ShowQuestions extends Component {

    state = { questions: [] }

    componentDidMount() {

        fetch(`${document.location.origin}/api/questions/questions/`)
            .then(response => response.json())
            .then(json => {
                console.log("json", json)
                this.setState({ questions: json })
                // this.setState({ questionsIds: [...json._id] })
            })
            .catch(err => alert(err.message));



    }



    render() {
        return (
            <div>OPENED QUESTIONS</div>
        )
    }
}
export default ShowQuestions;
import React, { Component } from "react";


class ShowSet extends Component {

    state = { questions: [], questionsIds: [] }

    componentDidMount() {
        // Get question set
        fetch(`${document.location.origin}/api/questions/questionset/${this.props.questionSetName}`)
            .then(response => response.json())
            .then(json => {
                console.log("didmount", json)
                this.setState({ questions: json })
            })
            .catch(err => alert(err.message));

    }

    componentDidUpdate() {
        fetch(`${document.location.origin}/api/questions/questionset/${this.props.questionSetName}`)
            .then(response => response.json())
            .then(json => console.log("update", json))//this.setState({ questions: json }))
            .catch(err => alert(err.message));

    }


    render() {
        return (
            <div>OPENED QUESTION SET {this.props.questionSetName}</div>
        )
    }
}
export default ShowSet;
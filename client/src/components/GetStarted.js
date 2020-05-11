import React, { Component } from "react";

class GetStarted extends Component {
    state = { name: "" }

    changeHandler = (e) => {
        // const field = e.target.name;
        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }

    onSubmit = (e) => {
        console.log(this.state.name);
        // post QS to database.
    }

    render() {
        return (
            <div className="content">
                <p style={{ margin: "2%", textAlign: "center" }}>Create a new question set to get started.</p>
                <form onSubmit={this.onSubmit} className="my-form" >
                    <div className="form-group">
                        <label>Question Set Name</label>
                        <input type="text" onChange={this.changeHandler} className="form-control" placeholder="Enter title" name="name" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">Create set</button>

                </form>
            </div>
        )
    }
}

export default GetStarted;
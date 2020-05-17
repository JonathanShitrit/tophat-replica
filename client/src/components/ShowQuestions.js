import React, { Component } from "react";


class ShowQuestions extends Component {

    state = { item: {} }

    componentDidMount() {
        this.setState({ item: this.props.item });
    }

    render() {
        return (
            <div className="col-sm-6" style={{ marginBottom: "2%" }}>
                <div className="card border-dark" style={{}}>
                    <div class="card-header"><h2>{this.state.item.questionTitle}</h2></div>
                    <div className="card-body">
                        {/* <h2 className="card-title">{item.questionTitle}</h2> */}
                        <p className="card-text"> {this.state.item.questionText}</p>
                        <label key={this.state.item._id} htmlFor={this.state.item._id}>Add?</label>
                        <input type="checkbox" value={this.state.item._id} name={this.state.item._id} key={this.state.item._id} id={this.state.item._id} className="questionsCheckbox" style={{ margin: "4px", verticalAlign: "middle" }} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowQuestions;
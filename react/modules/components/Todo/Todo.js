import React, { Component } from 'react';
 
export class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }

  render() {
    return (
      <div className="slds-p-around--small">
        <InputArea onSubmit={this.addItem}/>
        <BeerList items={this.state.beers}/>
      </div>
    );
  }
}

export class InputArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  setText(event) {
    this.setState({text: event.target.value});
  }

  handleClick() {
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div className="todo-component">
        <div className="slds-box slds-m-bottom--small">
          <div className="slds-form-element">
            <div className="slds-form-element__control slds-input-has-fixed-addon">
              <input className="slds-input" type="text" value={this.state.text} onChange={this.setText}/>
              <span className="slds-form-element__addon">
                <button className="slds-button slds-button--brand" onClick={this.handleClick}>Add</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
 
export class BeerList extends Component {
  render() {
    return this.props.items ?
      (<ul className="slds-list--dotted">
        {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>)
    : null;
  }
}
BeerList.propTypes = {
  items: React.PropTypes.array.isRequired
};
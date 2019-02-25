import React from 'react';

class InputControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      input: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
  }

  onChange(event) {
    this.setState({input: event.target.value});
  }

  onSubmit(e) {
    this.props.onChange(this.state.input);
    e.preventDefault();
  }

  onInputClick() {
    this.setState({input: ''});
    this.props.onRefresh();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field has-addons">
          <div className="control video-link-input">
            <input 
                className="input"
                type="text" 
                placeholder="Enter video link or search for video here"
                onChange={this.onChange}
                onClick={this.onInputClick}
                value={this.state.input}/>
          </div>
          <div className="control">
            <input className="button is-info" type="submit" value="Search"/>
          </div>
        </div>
      </form>
    )
  }
}

export default InputControl;
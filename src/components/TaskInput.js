import React from 'react';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      textarea: ''
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
    };
    const { textarea } = this.state;
    if (textarea) {
      this.props.addTask(textarea);
      this.setState({ textarea: '' });
    }
  };

  handleEnter = event => {
    if (event.key === 'Enter') this.addTask();
  };

  inputChange = event => {
    this.setState({ input: event.target.value });
  };

  textarChange = event => {
    this.setState({ textarea: event.target.value });
  };

  render() {
    const { input } = this.state;

    return (
      <div className="task-input">
        <input
          onChange={this.inputChange}
          value={input}
        ></input>
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}

export default TaskInput;

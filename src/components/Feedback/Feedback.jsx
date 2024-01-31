const { Component } = require('react');

class Feedback extends Component {
  render() {
    const { options, buttonHandler } = this.props;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          {options.map(option => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  buttonHandler(option);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feedback;

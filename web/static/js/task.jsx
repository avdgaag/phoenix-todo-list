export default React.createClass({
  displayName: 'Task',

  propTypes: {
    task: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired
    }).isRequired,
    dispatch: React.PropTypes.func.isRequired
  },

  handleChange(e) {
    this.props.dispatch("task:toggle", {
      id: this.props.task.id,
      checked: e.target.checked
    })
  },

  render() {
    return <li>
      <label>
        <input type="checkbox" checked={this.props.task.completed} onChange={this.handleChange} />
        {this.props.task.title}
      </label>
    </li>
  }
})

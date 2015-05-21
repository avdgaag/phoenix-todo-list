import Task from "./task"

export default React.createClass({
  displayName: 'TodoList',

  propTypes: {
    tasks: React.PropTypes.array,
    dispatch: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return { tasks: [] };
  },

  handleKeyPress(e) {
    if(e.key == "Enter") {
      this.props.dispatch("task:create", { title: e.target.value })
      this.refs.input.getDOMNode().value = ""
    }
  },

  componentDidMount() {
    this.refs.input.getDOMNode().focus()
  },

  renderTasks() {
    return this.props.tasks.map(task => {
      return <Task dispatch={this.props.dispatch} key={task.id} task={task} />
    })
  },

  render() {
    return <div>
      <ul>{this.renderTasks()}</ul>
      <input ref="input" className="new-task" type="text" placeholder="Enter new task" onKeyPress={this.handleKeyPress} />
    </div>
  }
})

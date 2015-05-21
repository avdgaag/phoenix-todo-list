import TodoList from "./todo_list"

export default React.createClass({
  displayName: 'Controller',

  propTypes: {
    store: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { tasks: this.props.store.getTasks() };
  },

  handleStoreUpdates() {
    this.setState({ tasks: this.props.store.getTasks() })
  },

  componentDidMount() {
    this.props.store.observe(this.handleStoreUpdates)
  },

  componentWillUnmount() {
    this.props.store.unobserve(this.handleStoreUpdates)
  },

  render() {
    return <TodoList dispatch={this.props.dispatch} tasks={this.state.tasks} />
  }
})

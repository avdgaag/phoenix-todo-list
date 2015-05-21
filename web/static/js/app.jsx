import Vent from "./vent"
import Store from "./store"
import Controller from "./controller"

function dispatch(action, payload) {
  Vent.push(action, payload)
}

React.render(
  <Controller dispatch={dispatch} store={Store} />,
  document.getElementById('todo_list')
)

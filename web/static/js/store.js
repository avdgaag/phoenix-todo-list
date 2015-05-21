let tasks = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Feed the dog", completed: true }
]

export default {
  getTasks() {
    return tasks;
  },

  _observers: [],

  addTask(title) {
    tasks.push({
      id: tasks.length + 1,
      title: title,
      completed: false
    })
    this.notify()
  },

  updateTask(id, checked) {
    tasks.forEach(task => {
      if(task.id === id) {
        task.completed = checked
      }
    })
    this.notify()
  },

  observe(callback) {
    this._observers.push(callback)
  },

  unobserve(callback) {
    let index = this._observers.indexOf(callback)
    if(index > -1) {
      this._observers.splice(index, 1)
    }
  },

  notify() {
    this._observers.forEach(callback => {
      callback()
    })
  }
}

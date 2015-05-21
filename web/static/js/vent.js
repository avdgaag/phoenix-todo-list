import {Socket} from "phoenix"
import Store from "./store"

let socket = new Socket("/ws")
socket.connect()
let chan = socket.chan("todo_lists:lobby", {})
chan.join().receive("ok", c => {
  console.log("Connected to websocket")

  chan.on("task:sync", payload => {
    Store.updateTask(payload.id, payload.checked)
  })

  chan.on("task:add", payload => {
    Store.addTask(payload.title)
  })
})

export default chan

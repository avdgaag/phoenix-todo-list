# Example Flux/websockets To Do List

This example project demonstrates how to build a collaborative To Do list
using Elixir, Phoenix, React and a Flux-like architecture.

* The front-end is built in React and only dispatches actions.
* Actions are deliverd to the back-end using websockets.
* The back-end application broadcasts changes back to all connected clients.
* The clients listen for events on the websocket and update their views.

Note that the back-end currently does not implement data persistence, but it is
not hard to see how incoming data might also be saved into database. Since we
don't have actual persistent tasks, the app has two hard-coded tasks to start
with -- enough to get the point across.

## Running locally

To start your new Phoenix application:

1. Install dependencies with `mix deps.get`
2. Start Phoenix endpoint with `mix phoenix.server`

Now you can visit `localhost:4000` from your browser.

defmodule Todo.TodoListChannel do
  use Todo.Web, :channel

  def join("todo_lists:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  def handle_in("task:create", payload, socket) do
    broadcast socket, "task:add", payload
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("task:toggle", payload, socket) do
    broadcast socket, "task:sync", payload
    {:reply, {:ok, payload}, socket}
  end

  # This is invoked every time a notification is being broadcast
  # to the client. The default implementation is just to push it
  # downstream but one could filter or change the event.
  def handle_out(event, payload, socket) do
    push socket, event, payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end

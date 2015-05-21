defmodule Todo.TodoListChannelTest do
  use Todo.ChannelCase

  alias Todo.TodoListChannel

  setup do
    {:ok, _, socket} = subscribe_and_join(TodoListChannel, "todo_lists:lobby")
    {:ok, socket: socket}
  end

  test "task:toggle replies with status ok", %{socket: socket} do
    ref = push socket, "task:toggle", %{"hello" => "there"}
    assert_reply ref, :ok, %{"hello" => "there"}
  end

  test "task:toggle broadcasts task:sync to todo_lists:lobby", %{socket: socket} do
    push socket, "task:toggle", %{"hello" => "all"}
    assert_broadcast "task:sync", %{"hello" => "all"}
  end

  test "task:create replies with status ok", %{socket: socket} do
    ref = push socket, "task:create", %{"hello" => "there"}
    assert_reply ref, :ok, %{"hello" => "there"}
  end

  test "task:toggle broadcasts task:add to todo_lists:lobby", %{socket: socket} do
    push socket, "task:create", %{"hello" => "all"}
    assert_broadcast "task:add", %{"hello" => "all"}
  end
end

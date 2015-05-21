defmodule Todo.PageController do
  use Todo.Web, :controller

  plug :action

  def index(conn, _params) do
    render conn, "index.html"
  end
end

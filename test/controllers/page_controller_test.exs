defmodule Todo.PageControllerTest do
  use Todo.ConnCase

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 200) =~ "To do"
  end
end

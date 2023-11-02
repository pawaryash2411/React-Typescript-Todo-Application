import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import { getTodos, setTodosData } from "./Utils/SaveData";

const List = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const editItemHandler = (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ): void => {
    const updatedTodo: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const deleteItemHandler = (id: TodoItemType["id"]): void => {
    const UpdatedList: TodoItemType[] = todos?.filter((todo) => todo.id !== id);
    setTodos(UpdatedList);
  };

  const isCompletedHandler = (id: TodoItemType["id"]): void => {
    const updatedTodo: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted !== todo.isCompleted;
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const handleAddList = () => {
    const newList: TodoItemType = {
      title: title,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };
    setTodos((prev) => [...prev, newList]);
    setTitle("");
  };

  useEffect(() => {
    setTodosData(todos);
  }, [todos]);

  return (
    <>
      <div className="flex justify-center pt-24 w-full min-h-screen bg-white ">
        <div>
          <textarea
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Write Something..."
            className="p-2 focus:outline-1 focus:outline-purple-500 text-purple-900 font-medium border-[0.1px]  h-[120px] border-[#9EA5B1] rounded-md w-[60vw] shadow-lg"
          ></textarea>
          <div className="flex justify-end">
            <button
              className="text-sm font-semibold absolute bg-purple-500 hover:bg-purple-700 ease-in-out duration-300
             w-fit text-white py-2 rounded px-3 shadow-lg disabled:bg-purple-950"
              onClick={handleAddList}
              disabled={title === ""}
            >
              Add
            </button>
          </div>
          <hr className="mt-16 border-purple-500 border-2 rounded-xl" />
          <div className="my-4 mt-20">
            {todos.length > 0 ? (
              <>
                {todos?.map((todo, i) => (
                  <ListItems
                    todo={todo}
                    key={i}
                    editItemHandler={editItemHandler}
                    deleteItemHandler={deleteItemHandler}
                    isCompletedHandler={isCompletedHandler}
                  />
                ))}
              </>
            ) : (
              <h5 className="text-xl text-purple-900">No List Found....</h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;

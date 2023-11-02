import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  editItemHandler: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ) => void;
  deleteItemHandler: (id: TodoItemType["id"]) => void;
  isCompletedHandler: (id: TodoItemType["id"]) => void;
};

const ListItems = ({
  todo,
  editItemHandler,
  deleteItemHandler,
  isCompletedHandler,
}: PropsType) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(todo.title);
  return (
    <>
      <div className="flex flex-col justify-end mt-5">
        {isEditable ? (
          <textarea
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Write Something..."
            className="p-2 focus:outline-1  text-purple-900 font-medium border-[2px] min-h-12 rounded-md w-[60vw] shadow-lg"
          ></textarea>
        ) : (
          <textarea
            value={todo.title}
            className={`p-2 focus:outline-1 border-purple-500 focus:outline-purple-500 text-purple-900 font-medium border-[3px] min-h-12  rounded-md w-[60vw] shadow-lg ${
              todo.isCompleted === true ? "underline text-gray-950" : ""
            }`}
            readOnly
            required
          ></textarea>
        )}
        <div className="flex justify-end">
          {!isEditable ? (
            <>
              <div
                className="text-sm font-semibold  bg-green-500 hover:bg-green-600 ease-in-out duration-300
             w-fit text-white py-2 rounded px-3 shadow-lg mt-2 mr-5"
              >
                <input
                  type="checkbox"
                  onChange={() => {
                    isCompletedHandler(todo.id);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setIsEditable((prev) => !prev);
                }}
                className="text-sm font-semibold  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300
             w-fit text-white py-2 rounded px-3 shadow-lg mt-2 mr-5"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteItemHandler(todo.id);
                }}
                className="text-sm font-semibold  bg-red-700 hover:bg-red-600 ease-in-out duration-300
             w-fit text-white py-2 rounded px-3 shadow-lg mt-2"
              >
                Delete
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsEditable((prev) => !prev);
                editItemHandler(todo.id, editTitle);
              }}
              className="text-sm font-semibold  bg-yellow-500 hover:bg-yellow-600 ease-in-out duration-300
             w-fit text-white py-2 rounded px-3 shadow-lg mt-2 mr-5 disabled:bg-yellow-900"
              disabled={editTitle === ""}
            >
              Edit Changes
            </button>
          )}
        </div>
      </div>
      {/* <hr className="mt-5 border-purple-500 border-2 rounded-xl" /> */}
    </>
  );
};

export default ListItems;

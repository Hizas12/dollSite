import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../redux/features/course/courseSlice";

const AddCoursePage = () => {
  const [title, setTitle] = useState("");
  const [coast, setCoast] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("coast", coast);
      data.append("image", image);
      dispatch(createCourse(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изображение:
        <input
          type="file"
          className="hiden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className="flex object-cover py-2">IMAGE</div>
      <label className="text-xs text-gray opacity-70">
        Название курса
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder: text-gray-700"
        />
      </label>
      <label className="text-xs text-gray opacity-70">
        Стоимость курса
        <textarea
          onChange={(e) => setCoast(e.target.value)}
          type="text"
          placeholder="Стоимость"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none placeholder: text-gray-700"
        />
      </label>

      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          onClick={submitHandler}
          className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
        >
          Добавить
        </button>
        <button className="flex justify-center items-center bg-red-600 text-xs text-white rounded-sm py-2 px-4">
          Отменить
        </button>
      </div>
    </form>
  );
};

export default AddCoursePage;

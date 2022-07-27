import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services1.js/actions/todosActions";

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((item, index) => (
            <article key={index}>
              <h4>{item.id}</h4>
              <h4>{item.title}</h4>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Todos;

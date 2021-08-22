import { useState } from "react";
import { v4 } from "uuid";
import { FiTrash, FiCheckSquare } from "react-icons/fi";
import { Container } from "./style";
import { api } from "../../services/api";
import { useEffect } from "react";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    api
      .get("/clients", {
        params: {
          userId: userId,
          token: token,
        },
      })
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  useEffect(() => {
    api.post("/clients", { userId, tasks });
  }, [tasks]);

  async function handleCreateNewTask() {
    if (newTaskTitle !== "") {
      const newTask = {
        id: v4(),
        title: newTaskTitle,
        isComplete: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  }

  function handleToggleTaskCompletion(id: string) {
    const changedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(changedTasks);
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    console.log(filteredTasks);
    setTasks(filteredTasks);
  }

  return (
    <Container>
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
}

import React, { useState } from 'react';

const Card = ({ day, createTask, toggleTask, removeCard, removeTask }) => {
    const [task, setTask] = useState("");

    return (
        <div className="each-day">
            <h2>{day.title}<a onClick={removeCard}><i className="fa fa-trash" style={{ fontSize: "48p", color: "blue", padding: "10px" }}></i></a></h2>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                onClick={(_) => {
                    createTask(task);
                    setTask("");
                }}
            >
                Create Task
      </button>

            <div className="task-wrapper">
                {day.tasks.map((task, taskIndex) => {
                    return (
                        <div
                            className="each-task"
                            key={taskIndex}
                            
                        >
                            <h3 className={task.completed === true ? "line" : ""}>
                                <a onClick={() => toggleTask(taskIndex)}>{task.title}</a>
                                <a onClick={()=>removeTask(taskIndex)}>
                                    <i className="fa fa-trash" style={{ fontSize: "38p", color: "blue", paddingLeft: "10px" }}></i></a>
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
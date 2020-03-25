import React from 'react';

const Task = ({ task, ...props }) => {
  console.log()
  const ActionBtn = () => (
    <div className="action-btn">
      {!task.done ? (
        <span style={{display: 'block', marginTop: '10px'}} aria-label="done" role="img" onClick={props.doneTask}>
          ✔️
        </span>
      ) : (
        <span style={{display: 'block', marginTop: '10px'}} aria-label="delete" role="img" onClick={props.deleteTask}>
          ❌
        </span>
      )}
    </div>
  );

  const className = 'task ' + (task.done ? 'task-done' : '');

  return (
    <div className={className}>
      <ul style={{listStyle: 'none'}}>
        <li><b>{task.title}</b>
          <p>{}</p>
        </li>
      </ul>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Task;

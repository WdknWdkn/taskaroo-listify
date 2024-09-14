import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Index = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.isRunning ? { ...task, elapsedTime: task.elapsedTime + 1 } : task
        )
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, isRunning: false, elapsedTime: 0 }]);
  };

  const startTask = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isRunning: true } : task
      )
    );
  };

  const stopTask = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isRunning: false } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onStartTask={startTask} onStopTask={stopTask} />
      </div>
    </div>
  );
};

export default Index;

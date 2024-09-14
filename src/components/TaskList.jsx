import React from 'react';
import { Button } from "@/components/ui/button";
import { formatTime } from '../utils/timeUtils';

const TaskList = ({ tasks, onStartTask, onStopTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="bg-white p-3 rounded shadow flex items-center justify-between">
          <div>
            <span className="font-medium">{task.name}</span>
            <span className="ml-2 text-sm text-gray-500">
              {formatTime(task.elapsedTime)}
            </span>
          </div>
          <div>
            {task.isRunning ? (
              <Button onClick={() => onStopTask(index)} variant="destructive" size="sm">
                Stop
              </Button>
            ) : (
              <Button onClick={() => onStartTask(index)} variant="default" size="sm">
                Start
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

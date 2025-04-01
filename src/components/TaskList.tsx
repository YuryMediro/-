import { TaskItem } from "./TaskItem"

interface TaskListProps {
  tasks: {id: string, text: string, completed: boolean}[]
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
}

export const TaskList = ({ tasks, deleteTask, toggleTask }: TaskListProps) => {
	return (
		<ul>
			{tasks.map(task => (
				<TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
			))}
		</ul>
	)
}
import clsx from 'clsx'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import s from './TaskItem.module.css'
interface TaskItemProps {
	task: { id: string; text: string; completed: boolean }
	deleteTask: (id: string) => void
	toggleTask: (id: string) => void
}

export const TaskItem = ({ task, deleteTask, toggleTask }: TaskItemProps) => {
	return (
		<li  className={clsx(s.taskItem, { [s.completed]: task.completed })}>
			<span onClick={() => toggleTask(task.id)}>
				{task.completed ? <FaCheck /> : null} {task.text}
			</span>
			<button onClick={() => deleteTask(task.id)}>
				<FaTrashAlt />
			</button>
		</li>
	)
}

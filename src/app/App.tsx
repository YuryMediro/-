import { useState } from 'react'
import { TaskInput } from '../components/TaskInput'
import s from './App.module.css'
import { TaskList } from '../components/TaskList'
import { Footer } from '../components/Footer'
import { useTasks } from '../hooks/useTask'

export const App = () => {
	const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useTasks()
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
	const filteredTasks = tasks.filter(task => {
		if (filter === 'active') return !task.completed
		if (filter === 'completed') return task.completed
		return true
	})

	return (
		<div className={s.app}>
			<div className={s.ddddd}>
				<h1>Todo App</h1>
				<TaskInput addTask={addTask} />
				<TaskList
					tasks={filteredTasks}
					toggleTask={toggleTask}
					deleteTask={deleteTask}
				/>
				<Footer
					tasks={tasks}
					clearCompleted={clearCompleted}
					setFilter={setFilter}
					 currentFilter={filter}
				/>
			</div>
		</div>
	)
}

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TaskInput } from '../components/TaskInput'
import s from './App.module.css'
import { TaskList } from '../components/TaskList'
import { Footer } from '../components/Footer'

type Task = {
	id: string
	text: string
	completed: boolean
}

export const App = () => {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const storedTasks = localStorage.getItem('tasks')
		return storedTasks ? JSON.parse(storedTasks) : []
	})
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	

	const addTask = (text: string) => {
		const newTask: Task = { id: uuidv4(), text, completed: false }
		setTasks(prev => [...prev, newTask])
	}

	const toggleTask = (id: string) => {
		setTasks(prev =>
			prev.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const deleteTask = (id: string) => {
		setTasks(prev => prev.filter(task => task.id !== id))
	}

	const clearCompleted = () => {
		setTasks(prev => prev.filter(task => !task.completed))
	}
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
				/>
			</div>
		</div>
	)
}

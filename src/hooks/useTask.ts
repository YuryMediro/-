import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Task = {
	id: string
	text: string
	completed: boolean
}

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const storedTasks = localStorage.getItem('tasks')
		return storedTasks ? JSON.parse(storedTasks) : []
	})

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

	return {
		tasks,
		addTask,
		toggleTask,
		deleteTask,
		clearCompleted,
	}
}

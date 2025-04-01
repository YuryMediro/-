import s from './Footer.module.css'

interface FooterProps {
	tasks: { id: string; text: string; completed: boolean }[]
	clearCompleted: () => void
	setFilter: (filter: 'all' | 'active' | 'completed') => void
}

export const Footer = ({ tasks, clearCompleted, setFilter }: FooterProps) => {
	const remaining = tasks.filter(task => !task.completed).length

	return (
		<footer className={s.footer}>
			<span>{remaining} items left</span>
			<div className={s.filters}>
				<button onClick={() => setFilter('all')}>All</button>
				<button onClick={() => setFilter('active')}>Active</button>
				<button onClick={() => setFilter('completed')}>Completed</button>
			</div>
			<button className={s.reset} onClick={clearCompleted}>Clear completed</button>
		</footer>
	)
}

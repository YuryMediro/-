import s from './Footer.module.css'

interface FooterProps {
	tasks: { id: string; text: string; completed: boolean }[]
	clearCompleted: () => void
	setFilter: (filter: 'all' | 'active' | 'completed') => void
	currentFilter: 'all' | 'active' | 'completed'
}

export const Footer = ({
	tasks,
	clearCompleted,
	setFilter,
	currentFilter,
}: FooterProps) => {
	const remaining = tasks.filter(task => !task.completed).length

	return (
		<footer className={s.footer}>
			<span>{remaining} items left</span>
			<div className={s.filters}>
				<button
					className={currentFilter === 'all' ? s.activeFilter : ''}
					onClick={() => setFilter('all')}
				>
					All
				</button>
				<button
					className={currentFilter === 'active' ? s.activeFilter : ''}
					onClick={() => setFilter('active')}
				>
					Active
				</button>
				<button
					className={currentFilter === 'completed' ? s.activeFilter : ''}
					onClick={() => setFilter('completed')}
				>
					Completed
				</button>
			</div>
			<button className={s.reset} onClick={clearCompleted}>
				Clear completed
			</button>
		</footer>
	)
}

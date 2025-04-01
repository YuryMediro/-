import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'

type FormData = {
	task: string
}

interface TaskInputProps {
	addTask: (task: string) => void
}

export const TaskInput = ({ addTask }: TaskInputProps) => {
	const { register, handleSubmit, reset } = useForm<FormData>()

	const onSubmit = (data: FormData) => {
        if (data.task.trim()) {
		addTask(data.task)
		reset()
        }
	}
    
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type='text' placeholder='Введите задачу' {...register('task')} />
			<button type='submit'>
				<FaPlus />
			</button>
		</form>
	)
}

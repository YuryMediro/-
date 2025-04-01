import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { App } from '../app/App'
import { act } from 'react'

// 1. Тестирование добавления новой задачи
test('add task', async () => {
	render(<App />)
	const input = screen.getByPlaceholderText('Введите задачу')
	const addButton = screen.getByRole('button', { name: /add/i })

	// Добавляем задачу
	act(() => {
		fireEvent.change(input, { target: { value: 'New Task' } })
		fireEvent.click(addButton)
	})

	// Ожидаем появления задачи в DOM
	await waitFor(() => {
		expect(screen.getByText('New Task')).toBeInTheDocument()
	})
})

  // 2. Тестирование переключения статуса задачи
  test('toggle task', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Введите задачу');
    const addButton = screen.getByRole('button', { name: /add/i });

    // Добавляем задачу
    fireEvent.change(input, { target: { value: 'Toggle Task' } });
    fireEvent.click(addButton);

    // Ожидаем появления задачи в DOM
    await waitFor(() => {
      expect(screen.getByText('Toggle Task')).toBeInTheDocument();
    });

    // Находим задачу и кликаем по ней
    const taskText = screen.getByText('Toggle Task')
    fireEvent.click(taskText)

    // Проверяем, что задача отмечена как выполненная
    expect(taskText).toHaveClass('completed')
  });
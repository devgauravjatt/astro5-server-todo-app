import { db } from '@/lib/server/db'
import { todos } from '@/lib/server/db/schema'

const userId = 'blWf5tt92zkwqa0dS8gdBfjwUjreTKxK'

function getRandomDateWithinLastSixMonths(): Date {
	const now = new Date()
	const sixMonthsAgo = new Date()
	sixMonthsAgo.setMonth(now.getMonth() - 6)

	const randomTimestamp =
		Math.random() * (now.getTime() - sixMonthsAgo.getTime()) +
		sixMonthsAgo.getTime()
	return new Date(randomTimestamp)
}

const todoss = [
	{
		user: userId,
		done: true,
		todo: 'Buy groceries',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Clean the house',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Read a book',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Write code',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Go for a walk',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Watch a movie',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Call a friend',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Learn TypeScript',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Cook dinner',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Plan a trip',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Exercise',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Meditate',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Write a journal entry',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: true,
		todo: 'Organize your desk',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
	{
		user: userId,
		done: false,
		todo: 'Water the plants',
		createdAt: getRandomDateWithinLastSixMonths(),
	},
]

const result = await db.insert(todos).values(todoss)
console.log('🚀  result :- ', result)

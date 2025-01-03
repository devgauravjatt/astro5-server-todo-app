import 'dotenv/config'
import { todos } from '@/lib/server/db/schema'
import * as schema from '@/lib/server/db/schema'
import { drizzle } from 'drizzle-orm/neon-http'

export const db = drizzle(process.env.DATABASE_URL!, {
	schema: schema,
})

const userId = 'nbod2rfln5UZ8yt4U5frWNilPifwzaLQ'

const todoss = [
	{
		user: userId,
		done: true,
		todo: 'Buy groceries',
	},
	{
		user: userId,
		done: false,
		todo: 'Clean the house',
	},
	{
		user: userId,
		done: true,
		todo: 'Read a book',
	},
	{
		user: userId,
		done: false,
		todo: 'Write code',
	},
	{
		user: userId,
		done: true,
		todo: 'Go for a walk',
	},
	{
		user: userId,
		done: false,
		todo: 'Watch a movie',
	},
	{
		user: userId,
		done: true,
		todo: 'Call a friend',
	},
	{
		user: userId,
		done: true,
		todo: 'Learn TypeScript',
	},
	{
		user: userId,
		done: false,
		todo: 'Cook dinner',
	},
	{
		user: userId,
		done: false,
		todo: 'Plan a trip',
	},
	{
		user: userId,
		done: true,
		todo: 'Exercise',
	},
	{
		user: userId,
		done: true,
		todo: 'Meditate',
	},
	{
		user: userId,
		done: false,
		todo: 'Write a journal entry',
	},
	{
		user: userId,
		done: true,
		todo: 'Organize your desk',
	},
	{
		user: userId,
		done: false,
		todo: 'Water the plants',
	},
]

const result = await db.insert(todos).values(todoss)

console.log('🚀  result :- ', result)

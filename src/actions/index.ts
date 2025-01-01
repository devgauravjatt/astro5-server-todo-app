import { db } from '@/lib/server/db'
import { todos } from '@/lib/server/db/schema'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { eq } from 'drizzle-orm'

export const server = {
	doneTodo: defineAction({
		input: z.object({
			todoId: z.string(),
			todoDone: z.boolean(),
		}),
		handler: async (input) => {
			console.log(
				`🚀 doneTodo action for todoId :- ${input.todoId} todoDone :- ${input.todoDone}`
			)

			// Add a 2 second delay
			await new Promise((resolve) => setTimeout(resolve, 2000))

			await db
				.update(todos)
				.set({ done: input.todoDone })
				.where(eq(todos.id, Number(input.todoId)))

			return {
				todoId: input.todoId,
				updated: true,
			}
		},
	}),
	removeTodo: defineAction({
		input: z.object({
			todoId: z.string(),
		}),
		handler: async (input) => {
			console.log(`🚀 removeTodo action for todoId :- ${input.todoId}`)

			//* Add a 2 second delay
			await new Promise((resolve) => setTimeout(resolve, 2000))

			await db.delete(todos).where(eq(todos.id, Number(input.todoId)))

			return {
				todoId: input.todoId,
				updated: true,
			}
		},
	}),
	addTodo: defineAction({
		input: z.object({
			todo: z.string(),
			userId: z.string(),
		}),
		handler: async (input) => {
			console.log(`🚀 addTodo action for todo :- ${input.todo}`)

			//* Add a 2 second delay
			await new Promise((resolve) => setTimeout(resolve, 2000))

			const getTodo = await db
				.insert(todos)
				.values({ todo: input.todo, user: input.userId })
				.returning()

			return {
				todoId: getTodo[0].id,
				updated: true,
			}
		},
	}),
}

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
}

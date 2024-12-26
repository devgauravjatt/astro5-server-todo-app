import type { APIRoute } from 'astro'
import { auth } from '@/lib/server/auth'

export const ALL: APIRoute = async (ctx) => {
	return auth.handler(ctx.request)
}

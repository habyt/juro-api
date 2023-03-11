import { ApiError as JuroApiError } from '../generated/juro'

export type Optional<T> = T | null | undefined

export const isJuroApiError = (e: unknown): e is JuroApiError => e instanceof JuroApiError

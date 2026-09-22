export class AppError extends Error {
    constructor(
        public code: string,
        public location: string,
        message?: string,
        public status = 400,
        public details?: Record<string, unknown>,
        public cause?: unknown,
    ) {
        super(message, { cause })
        this.name = 'AppError'
        this.code = code
        this.location = location
        this.status = status
        this.details = details
        this.cause = cause
    }
}
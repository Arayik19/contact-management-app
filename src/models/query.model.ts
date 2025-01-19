export interface QueryModel<T> {
    data: T | null | undefined,
    errorMessage: string | undefined
}
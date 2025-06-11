export class AliasAlreadyExistsException extends Error {
  constructor(alias: string) {
    super(`Alias "${alias}" already exists`)
  }
}
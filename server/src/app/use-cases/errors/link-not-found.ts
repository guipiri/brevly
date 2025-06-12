export class LinkNotFoundException extends Error {
  constructor() {
    super('Link not found')
  }
}

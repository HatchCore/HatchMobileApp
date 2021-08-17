// eslint-disable-next-line import/prefer-default-export
export class EntityDoesNotExistError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EntityDoesNotExistError";
  }
}

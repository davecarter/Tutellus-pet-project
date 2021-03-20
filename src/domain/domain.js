export class UseCase {
  static create() {
    throw new Error("[UseCase.create] should be implemented")
  }

  execute() {
    throw new Error("[UseCase#execute] should be implemented")
  }
}

export class Service {
  static create() {
    throw new Error("[Service.create] should be implemented")
  }

  execute() {
    throw new Error("[Service#execute] should be implemented")
  }
}

export class Repository {
  static create() {
    throw new Error("[Repository.create] should be implemented")
  }
}
export class Fetcher {
  static create() {
    throw new Error("[Fetcher.create] should be implemented")
  }

  get() {
    throw new Error("[Fetcher#get] should be implemented")
  }

  post() {
    throw new Error("[Fetcher#post] should be implemented")
  }

  put() {
    throw new Error("[Fetcher#put] should be implemented")
  }

  patch() {
    throw new Error("[Fetcher#patch] should be implemented")
  }

  delete() {
    throw new Error("[Fetcher#delete] should be implemented")
  }
}

export class Model {
  static create() {
    throw new Error("[Model.create] should be implemented")
  }

  toJSON() {
    throw new Error("[Model#toJSON] should be implemented")
  }
}

export class Mapper {
  static create() {
    throw new Error("[Mapper.create] should be implemented")
  }

  map() {
    throw new Error("[Mapper#map] should be implemented")
  }
}

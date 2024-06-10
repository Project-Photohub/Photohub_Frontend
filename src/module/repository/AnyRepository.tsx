export class AnyRepository<T> {

    data: T

    constructor(data: T) {
        this.data = data
    }
}
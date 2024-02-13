export class StorageFullError {
    constructor(maxItems?: Number) {
        this.maxItems = maxItems;
    }

    maxItems?: Number;
}

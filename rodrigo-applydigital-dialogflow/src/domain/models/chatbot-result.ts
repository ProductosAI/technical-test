export class ChatbotResult {
    constructor(result: string, success: boolean = true) {
        this.result = result;
        this.success = success;
    }

    result: string;
    success: boolean;
}

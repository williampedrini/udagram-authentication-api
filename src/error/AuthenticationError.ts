import {HttpError} from 'routing-controllers';

export default class AuthenticationError extends HttpError {
    constructor(message: string) {
        super(400, message);
    }
}

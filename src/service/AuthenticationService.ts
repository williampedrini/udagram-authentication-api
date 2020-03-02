import * as jwt from 'jsonwebtoken';
import {JsonWebTokenError} from 'jsonwebtoken';
import {Service} from 'typedi';
import {config} from '../config/Config';
import {UnauthorizedError} from 'routing-controllers';
import AuthenticationError from '../error/AuthenticationError';
import TokenCreateRequest from "../dto/TokenCreateRequestDTO";
import TokenCreateResponseDTO from "../dto/TokenCreateResponseDTO";

@Service()
export default class AuthenticationService {

    /**
     * Creates a specific JWT token based on the user information.
     * @param request The request containing the data to be uses to generate the token.
     * @return The object containing the token creation.
     */
    public createJwtToken(request: TokenCreateRequest): TokenCreateResponseDTO {
        let token = jwt.sign(request.email, config.jwt.secret);
        return new TokenCreateResponseDTO(token);
    }

    /**
     * Verifies whether a token is valid or not.
     * @param token The token to be validated.
     * @return The object containing the validation results.
     */
    public checkJwtToken(token: string): AuthenticationCheckResponseDTO {
        if (!token) {
            throw new AuthenticationError('No authorization headers.');
        }
        jwt.verify(token, config.jwt.secret, (error: JsonWebTokenError) => {
            if (error) {
                throw new UnauthorizedError('JWT Token is not valid.');
            }
        });
        return {
            message: 'JWT Token is valid.'
        };
    }
}

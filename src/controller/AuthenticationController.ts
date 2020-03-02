import 'reflect-metadata';
import {Body, JsonController, Post} from 'routing-controllers';
import {Inject} from 'typedi';
import AuthenticationService from '../service/AuthenticationService';
import AuthenticationCheckRequest from '../dto/AuthenticationCheckRequestDTO';
import TokenCreateRequestDTO from "../dto/TokenCreateRequestDTO";
import TokenCreateResponseDTO from "../dto/TokenCreateResponseDTO";

@JsonController('/token')
export default class AuthenticationController {

    @Inject()
    private authenticationService: AuthenticationService;

    @Post()
    public createJwtToken(@Body() request: TokenCreateRequestDTO): TokenCreateResponseDTO {
        return this.authenticationService.createJwtToken(request);
    }

    @Post('/check')
    public checkJwtToken(@Body() request: AuthenticationCheckRequest): AuthenticationCheckResponseDTO {
        return this.authenticationService.checkJwtToken(request.token);
    }
}

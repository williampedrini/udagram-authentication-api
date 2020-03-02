import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {createExpressServer} from 'routing-controllers';
import {Application} from 'express';
import AuthenticationController from '../controller/AuthenticationController';
import {GlobalErrorHandlerMiddleware} from '../middleware/GlobalErrorHandlerMiddleware';

export const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const application: Application = createExpressServer({
            defaultErrorHandler: false,
            controllers: [AuthenticationController],
            middlewares: [GlobalErrorHandlerMiddleware]
        });
        settings.setData('express_app', application);
        settings.setData('express_server', application.listen(8081));
    }
};

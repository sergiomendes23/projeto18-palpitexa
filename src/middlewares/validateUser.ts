import userSchema from '../schemas/userSchema.js';
import { Request, Response, NextFunction} from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction){

    const user = req.body;

    const {error} = userSchema.validate(user, {abortEarly: false});

    if(error){
        const erros = error.details.map(erro => erro.message)
        return res.status(422).send(erros)
    };

    next();
}
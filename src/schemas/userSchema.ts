import joi from 'joi';

const userSchema = joi.object(
    {
        name: joi.string().required(),
        squad: joi.string().required()
    }
);

export default userSchema;
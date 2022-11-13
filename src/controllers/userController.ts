import connection from '../database.js';
import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response){
    try{
        const { name, squad } = req.body;

        const user = await connection.query(`
        SELECT * FROM users 
        WHERE name = $1`, 
        [name]);

        if(user.rows.length != 0) {
            return res.sendStatus(401)
        };

        await connection.query(`INSERT INTO users (name, squad) VALUES ($1, $2)`, [name, squad]);

        res.sendStatus(201);
    }catch(error){
        console.log(error)
        return res.sendStatus(500);
    }
}


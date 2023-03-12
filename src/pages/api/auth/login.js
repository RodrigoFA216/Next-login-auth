import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler(req, res) {
    const { email, password } = req.body;
    // buscar en la db si el email y password son válidos
    // verificar si existe el email
    // veriicar si el password es correcto para ese email
    if (email === 'admin@local.local' && password === 'admin') {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
            email: 'admin@local.local',
            username: 'roy'
        }, 'secret')
        const serialized = serialize('myTokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/',
        })
        res.setHeader('Set-Cookie', serialized)
        return res.setHeader('Set-Cookie', serialized).json('login successfully')
    };
    return res.status(401).json({ message: 'Invalid credentials' })
}
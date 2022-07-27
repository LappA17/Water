// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from './data/usersDB'

type Data = {
	name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'GET') {
		// @ts-ignore
		res.status(200).json(users)
	}
	if (req.method === 'POST') {
		const user = req.body
		const newUser = {
			name: user.name,
			mail: user.mail,
			number: user.number,
			password: user.password,
			street: user.street,
			streetNumber: user.streetNumber,
			entrance: user.entrance,
			floor: user.floor,
		}
		users.push(newUser)
		res.status(201).json(newUser)
	}
}

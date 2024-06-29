import { NextApiRequest, NextApiResponse } from 'next';
import url from '@/config'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;
        try {
            const response = await fetch(url + '/api/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                res.status(200).json({ message: 'Sign up successful' });
            } else {
                res.status(500).json({ message: 'Sign up failed' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Sign up failed' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

type Data = {
    username: string;
};

const getUserData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const response = await fetch(url + '/user/stats');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch user data');
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export { signup, getUserData };

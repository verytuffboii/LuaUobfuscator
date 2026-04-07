export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    try {
        const response = await fetch('https://soteria.rip/api/obfuscate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'e4facd6e-f54c-44e7-8ee3-5f6b99817d0d'
            },
            body: JSON.stringify({ code: req.body.code })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to reach Soteria' });
    }
}

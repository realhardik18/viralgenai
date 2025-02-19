export async function POST(req) {
    try {
        const body = await req.json();

        if (!body.input) {
            throw new Error("Missing 'input' parameter");
        }

        const response = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_REPLICATE_API_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'wait'
            },
            body: JSON.stringify({
                input: {
                    prompt: body.input.prompt,                                        
                    aspect_ratio: body.input.aspect_ratio ?? "1:1"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log(error.message)        
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
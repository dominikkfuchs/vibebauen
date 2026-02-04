import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
    try {
        const { price, title, paymentMethod, name, email } = await req.json();

        // Validation
        if (!name || !email || !price || !title) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const courseTitleEncoded = encodeURIComponent(title);

        // Handle standard non-Stripe methods (Invoice, PayPal, Klarna)
        // In a real app, you would save the order to the DB here.
        if (['invoice', 'paypal', 'klarna'].includes(paymentMethod)) {
            console.log(`[Order Created] Method: ${paymentMethod}, User: ${name} (${email}), Course: ${title}, Amount: ${price}`);

            // Simulate processing delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            return NextResponse.json({
                url: `/success?method=${paymentMethod}&course=${courseTitleEncoded}`
            });
        }

        // Stripe Card Payment
        if (!process.env.STRIPE_SECRET_KEY) {
            // Fallback for demo without keys
            console.warn("Stripe API keys missing. Simulating success.");
            console.log(`[Order Created] Method: CARD (Simulated), User: ${name} (${email}), Course: ${title}, Amount: ${price}`);
            await new Promise(resolve => setTimeout(resolve, 1000));

            return NextResponse.json({ url: `/success?method=card&course=${courseTitleEncoded}&simulated=true` });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2024-12-18.acacia' as any,
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email, // Pre-fill email in Stripe
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: title,
                        },
                        unit_amount: price * 100, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            metadata: {
                customer_name: name,
                course_title: title,
            },
            success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}&course=${courseTitleEncoded}&method=card`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

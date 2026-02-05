import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
    try {
        const { price, title, paymentMethod, name, email } = await req.json();

        // Validation
        if (!name || !email || !price || !title) {
            return NextResponse.json({ error: 'Bitte fülle alle Pflichtfelder aus.' }, { status: 400 });
        }

        const productTitleEncoded = encodeURIComponent(title);
        const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';



        // Stripe Card Payment
        if (!process.env.STRIPE_SECRET_KEY) {
            console.error("STRIPE_SECRET_KEY is not configured");
            return NextResponse.json(
                { error: 'Zahlungssystem nicht konfiguriert. Bitte kontaktiere den Support.' },
                { status: 500 }
            );
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-12-15.clover',
        });

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: title,
                            description: 'VibeBauen.de - Vibe Coding Akademie',
                        },
                        unit_amount: Math.round(price * 100), // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            metadata: {
                customer_name: name,
                customer_email: email,
                product_title: title,
                price_eur: price.toString(),
            },
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&product=${productTitleEncoded}&method=card`,
            cancel_url: `${origin}/cancel`,
            locale: 'de', // German language for Stripe Checkout
        });

        return NextResponse.json({ url: session.url });

    } catch (err: unknown) {
        console.error('Checkout error:', err);

        const errorMessage = err instanceof Error ? err.message : 'Ein unerwarteter Fehler ist aufgetreten.';

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}

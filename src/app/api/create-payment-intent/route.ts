import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialization to prevent build-time errors
let stripe: Stripe | null = null;

function getStripe() {
    if (!stripe) {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error('STRIPE_SECRET_KEY is not configured');
        }
        stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-12-15.clover',
        });
    }
    return stripe;
}

export async function POST(req: Request) {
    try {
        const { price, title, name, email } = await req.json();

        if (!price) {
            return NextResponse.json({ error: 'Missing price' }, { status: 400 });
        }

        const stripeClient = getStripe();

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripeClient.paymentIntents.create({
            amount: Math.round(price * 100),
            currency: "eur",
            description: `VibeBauen.de - ${title}`,
            receipt_email: email,
            metadata: {
                customer_name: name,
                product_title: title,
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: `Internal Server Error: ${errorMessage}` },
            { status: 500 }
        );
    }
}

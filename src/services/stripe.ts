import Stripe from 'stripe';

const  stripeApiKey = process.env.STRIPE_SECRET_KEY || '';

export const stripe = new Stripe(stripeApiKey, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'plataforma-photos',
        version: '0.1.0'
    },
})
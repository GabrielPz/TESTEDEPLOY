import ResponsiveAppBar from '@/components/AppBar'
import styles from './styles.module.css'
import { GetServerSideProps } from 'next'
import { stripe } from '@/services/stripe'
import Stripe from 'stripe'
import {useEffect} from 'react';
import { handlePaymentSucces } from '@/services/apiCalls'
import { useFileContext } from '@/contexts/FileContext'
import { useRouter } from 'next/router'
import { Paper } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface SuccessProps{
    customerName: string,
    sessionId: string,
    product: {
        name: string,
        description: string,
    }
}

export default function Success({customerName,sessionId, product}: SuccessProps){

    return(
        <>
        <div className={styles.body}>
            <div className={styles.successContainer}>
            <Paper elevation={10} sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <CheckCircleOutlineIcon color='success' fontSize="large"/>
                <h1>Compra efetuada com sucesso</h1>
                <div></div>

                <h2>Parabéns!</h2><strong>{customerName}</strong>
                <h2>Sua compra  do item: {product.name} foi efetuada com sucesso</h2>
                
            </Paper>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query, params}) =>{
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId,{
        expand: ['line_items', 'line_items.data.price.product']
    });
    const customerName = session.customer_details?.name;
    const product = session.line_items?.data[0].price?.product as Stripe.Product;

    // const sessionId = session.;
    //Lembrar de passar  asessionId noa api
    return {
        props: {
            customerName,
            sessionId,
            product: {
            name: product.name,
            description: product.description,
            }

        }
    }
}
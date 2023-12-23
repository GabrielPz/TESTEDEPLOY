import ResponsiveAppBar from '@/components/AppBar'
import styles from './styles.module.css'
import { GetServerSideProps, GetStaticProps } from 'next'
import { stripe } from '@/services/stripe'
import Stripe from 'stripe'
import {useEffect} from 'react';
import { handlePaymentSucces } from '@/services/apiCalls'
import { useFileContext } from '@/contexts/FileContext'
import { useRouter } from 'next/router'
import { Paper } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Success(){

    return(
        <>
        <div className={styles.body}>
            <div className={styles.successContainer}>
            <Paper elevation={10} sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <CheckCircleOutlineIcon color='success' fontSize="large"/>
                <h1>Compra efetuada com sucesso</h1>
                <div></div>

                <h2>Parabéns!</h2>
                <h2>Sua compra foi efetuada com sucesso</h2>

            </Paper>
            </div>
        </div>
        </>
    )
}

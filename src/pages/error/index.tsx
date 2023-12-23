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
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslation } from 'react-i18next'

export default function Error(){
    const { t } = useTranslation("global");
    return(
        <>
        <div className={styles.body}>
            <div className={styles.successContainer}>
            <Paper elevation={10} sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <ErrorOutlineIcon color='error' fontSize="large"/>
                <h1>{t("errorTitulo")}</h1>
                <div></div>

                <h2>{t("errorSubtitulo")}</h2><strong>{t("errorBody")}</strong>
            </Paper>
            </div>
        </div>
        </>
    )
}
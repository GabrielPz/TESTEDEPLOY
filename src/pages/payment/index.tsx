import ResponsiveAppBar from "@/components/AppBar";
import { stripe } from "@/services/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";
import styles from './payment.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardMedia, Input, StepContent, TextField, Typography } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { UploadImagem } from "@/components/UploadImg";
import {useState} from 'react';
import { FileInput } from "@/components/DropZone";
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useFileContext } from "@/contexts/FileContext";
import { api } from "@/services/axios";
import router, { useRouter } from "next/router";
import { MultiStep } from "@ignite-ui/react";
import handler from '../api/checkout';
import axios from "axios";
import { handlePayment, handlePaymentSucces } from "@/services/apiCalls";
import { useTranslation } from "react-i18next";
import { cssForCard, cssForCard2 } from "@/constants";

interface PaymentProps {
    products: {
        id: string;
        title: string;
        description: string;
        price: number;
        defaultPriceId: string;
    }[]
}



export default function Payment({ products }: PaymentProps) {
    
    console.log(products);
    const [imgs, setImgs] = useState<File[] | null>([]);
    const {t} = useTranslation("global");
    const [planSelected, setPlanSelected] = useState<number>(4);
    const [planSelectedName, setPlanSelectedName] = useState<string>('');
    const [defaultPriceId, setDefaultPriceId] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handlePrev = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const router = useRouter();

    const {files, setFiles} = useFileContext();
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[imgName, setImgName] = useState('');
    const[imgDescription, setImgDescription] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[imgTags, setImgTags] = useState('');


    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const filteredPlan = () => {
            if(products.length == 4){
                if(planSelected == 0) return 4
                else{
                    return planSelected;
                }
            } else {
                return planSelected+1;
            }
        }
        sessionStorage.setItem('formData', JSON.stringify({
            email: email,
            name: name,
            telefone: phoneNumber,
            nomeImage: imgName,
            descricao: imgDescription,
            planoId: filteredPlan()
        }));

        const sendData = async () =>{
            const responsePaymentIntent = await handlePayment(defaultPriceId);
            const customerId = responsePaymentIntent?.customerId;
            console.log(customerId);
            const response = await handlePaymentSucces(customerId, files);
            if(response == true){
                // router.push('/home')
                window.location.href = responsePaymentIntent?.url;
            }
        }
        sendData();
    }

    return (
        <div className={styles.body}>
            {activeStep == 0 && 
                    (<div className={styles.bodyPayment}>
                        <div className={styles.stepper}>
                        <MultiStep size={2} currentStep={1}/>
                        </div>
                                    <h1>{t("pagamentoTitulo")}</h1>
                                    <h2>{t("pagamentoSubtitulo")}</h2>
                                    
                                    <div className={styles.boxPaymentContainer}>
                                        <Card sx={cssForCard2} >
                                            <CardContent >
                                                <form>
                                                    <FileInput/>
                                                </form>
                                            </CardContent>
                                        </Card>
                                        <Card sx={cssForCard2}>
                                                <CardContent sx={{alignItems: 'space-between', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                                <Typography gutterBottom variant="h4" >
                                                    {t("descFotoTitulo")}
                                                </Typography>
                                                <TextField
                                                    id='imgDescription'
                                                    label={t("descFotoForm")}
                                                    placeholder="Foto tirada em uma montanha..."
                                                    multiline
                                                    onChange={(e) => setImgDescription(e.target.value)}
                                                />
                                                <TextField
                                                    id='phoneNumber'
                                                    label={t("phone")}
                                                    placeholder=""
                                                    multiline
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                                </CardContent>
                                        </Card>
                                        
                                    </div>
                                        <div className={styles.plansContainer}>
                                            {products.map((product, index) => {
                                                return (
                                                    <Card className={`${styles.planCard} ${styles.hoverGray} ${planSelected === index ? styles.selectedPlan : ''}`} key={product.id} onClick={(e)=>{
                                                        e.preventDefault();
                                                        setPlanSelected(index);
                                                        setPlanSelectedName(product.title);
                                                        setDefaultPriceId(product.defaultPriceId);
                                                        console.log(planSelected);
                                                    }}>
                                                        <CardActionArea>
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    {product.title}
                                                                </Typography>
                                                                <Typography gutterBottom variant="body2" component="div">
                                                                    {product.description}
                                                                </Typography>
                                                                <Typography variant="h6" color="text.secondary">
                                                                    {new Intl.NumberFormat('en-US', {
                                                                        style: 'currency',
                                                                        currency: 'USD',
                                                                    }).format(product.price)}
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                        <div className={styles.buttonContainer}>
                                        <Button
                                        variant="contained"
                                        onClick={handlePrev}
                                        sx={{
                                            marginTop: 3,
                                            marginBottom: 3,
                                            width: '10rem',
                                            height: '4rem',
                                            background: '#5cb85c',  // Light green shade
                                            color: 'white',
                                        }}
                                        >
                                            {t("botaoVoltar")}
                                        </Button>
                                        <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{
                                            marginTop: 3,
                                            marginBottom: 3,
                                            width: '10rem',
                                            height: '4rem',
                                            background: '#5cb85c',  // Light green shade
                                            color: 'white',
                                        }}
                                        >
                                           {t("botaoProximo")}
                                        </Button>
                                        </div>
                    </div>)} { activeStep == 1 && (
                <div className="bodyPayment">
                    <div className={styles.stepper}>
                        <MultiStep size={2} currentStep={2}/>
                    </div>
                    <h1>{t("pagamentoTitulo2")}</h1>
                    <div >
                        <Card sx={cssForCard}>
                            <CardContent sx={{alignItems: 'space-between', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="h4" >
                                </Typography>
                                <TextField
                                    id='name'
                                    label={t("nome")}
                                    placeholder="Silva..."
                                    multiline
                                    sx={{
                                        width: '120%',
                                    }}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    id='email'
                                    label={t("email")}
                                    placeholder="exemplo@exemplo.com"
                                    multiline
                                    sx={{
                                        marginTop: 3,
                                        width: '120%',
                                    }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    id='imgName'
                                    label={t("nomeFoto")}
                                    placeholder="Gran canyon.."
                                    multiline
                                    sx={{
                                        marginTop: 3,
                                        width: '120%',
                                    }}
                                    onChange={(e) => setImgName(e.target.value)}
                                />
                                </CardContent>
                        </Card>
                    </div>
                    <div className={styles.buttonContainer}>
                    <Button
                            variant="contained"
                            onClick={handlePrev}
                            sx={{
                                marginTop: 3,
                                marginBottom: 3,
                                width: '10rem',
                                height: '4rem',
                                background: '#5cb85c',  // Light green shade
                                color: 'white',
                            }}
                            >
                            {t("botaoVoltar")}
                        </Button>
                    <Button
                            variant="contained"
                            onClick={(e)=>{handleSubmit(e)}}
                            sx={{
                                marginTop: 3,
                                marginBottom: 3,
                                width: '10rem',
                                height: '4rem',
                                background: '#5cb85c',  // Light green shade
                                color: 'white',
                            }}
                            >
                            {t("botaoEnviar")}
                        </Button>
                    </div>
                </div>
                    )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price', 'data.price']
    });

    console.log("Products from API");
    // console.log(response.data);

    const products = response.data.map(product => {

        const price = product.default_price as Stripe.Price;
        console.log(product);
        if (price && price.unit_amount !== null) {
            return {
                id: product.id,
                title: product.name,
                description: product.description,
                price: price.unit_amount / 100,
                defaultPriceId: price.id,
            };
        } else {
            return {
                id: product.id,
                title: product.name,
                description: product.description,
                price: 20,
                defaultPriceId: '',
            };
            
        }
    });

    console.log("Products from API");
    console.log(products);

    return {
        props: {
            products,
        }
    };
};

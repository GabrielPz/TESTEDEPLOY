// import { useFileContext } from "@/contexts/FileContext";
import { api } from "./axios";
// import { useRouter } from "next/router";
import axios from "axios";


export async function handlePaymentSucces(stripeCustomer: string, files: File[]) {

    const formInfo = JSON.parse(sessionStorage.getItem('formData') || '{}')
    // const stripeCustomer = sessionStorage.getItem('stripeCustomer') || '';
    // const router = useRouter();
    console.log(formInfo);

    // e.preventDefault();s
    let formData = new FormData();
    formData.append('email', formInfo.email);
    formData.append('nome', formInfo.name);
    formData.append('telefone', formInfo.telefone);
    formData.append('nomeImage', formInfo.nomeImage);
    formData.append('descricao', formInfo.descricao);
    formData.append('tags', formInfo.tags);
    formData.append('planoId', formInfo.planoId.toString());
    formData.append('stripeCustomer', stripeCustomer)

    for(let i = 0; i < files.length; i++){
        if(i == 0){
            formData.append('file', files[i]);
        } else if(i == 1){
            formData.append('file2', files[i]);
        } else if(i == 2){
            formData.append('file3', files[i]);
        } else if(i == 3){
            formData.append('file4', files[i]);
        } else if(i == 4){
            formData.append('file5', files[i]);
        }
    }

    // sessionStorage.setItem('formData', JSON.stringify({
    //     email: formInfo.email,
    //     name: formInfo.name,
    //     nomeImage: formInfo.imgName,
    //     descricao: formInfo.imgDescription,
    //     tags: formInfo.imgTags,
    //     planoId: (formInfo.planSelected + 1).toString()
    // }));

    try{
        const response = await api.post("user/create", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
                }
        })

        return true;
    } catch(e){
        console.log(e);
        return false;

    }
}

export async function handlePayment(price_id: string){
    console.log(price_id)
    try{
        const response = await axios.post('/api/checkout',{
            priceId: price_id,
        })
        const { checkoutUrl, checkoutId, customerId } = response.data;
        console.log(customerId);
        //Se é para uma rota externa usa assim:
        // window.location.href = checkoutUrl;

        return {
            url: checkoutUrl,
            id: checkoutId,
            customerId: customerId
        }

    }catch(e){
        alert('Falha ao redirecionar para o checkout: '+e);
    }
    }
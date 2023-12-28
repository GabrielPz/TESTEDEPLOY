import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import 'swiper/css';
import { Slider, SliderProps, Slide } from '../components/commons/Slider';
import styles from './styles.module.css';
import Divider from '@mui/material/Divider';
import SearchBar from '@/components/commons/Search';
import CardMedia from '@mui/material/CardMedia';
import {api} from '@/services/axios';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import ModalComponent from '@/components/ModalComponent';
import Modal from '@mui/material/Modal';
import { Button, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { settings, settingsAnuncioSlider, settingsCircleSlider, settingsSlidesModal, settingsSlidesModalSub, styleModal } from '@/constants';
import { useTranslation } from 'react-i18next';

interface ImageProps {
  id: number;
  nome: string;
  descricao: string;
  link: string;
  lnk2: string;
  lnk3: string;
  lnk4: string;
  lnk5: string;
  createdAt: string;
  updatedAt: string;
  usuarioId: number;
  planoId: number;
}

interface AnuncioProps{
  id: number;
  nome: string;
  descricao: string;
  link: string;
  imagem: string;
  createdAt: string;
  updatedAt: string;
  dataFinal: string;
}

interface HomeProps {
  imagesPlan1: ImageProps[];
  imagesPlan2: ImageProps[];
  imagesPlan3: ImageProps[];
  anuncios: AnuncioProps[];
}

export default function Home({imagesPlan1, imagesPlan2, imagesPlan3, anuncios}: HomeProps) {
    //FLUXO DE QUANTIDADE DE IMAGENS POR SLIDE 24 --> 24 --> 24

  // const[imagesPlan1, setImagesPlan1] = useState<ImageProps[]>([]);
  // const[imagesPlan2, setImagesPlan2] = useState<ImageProps[]>([]);
  // const[imagesPlan3, setImagesPlan3] = useState<ImageProps[]>([]);
  const {t} = useTranslation("global")
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState<ImageProps | null>(null);
  const [link, setLink] = useState<string[]>([])
  const [open, setOpen] = useState(false);
  const[filter, setFilter] = useState("");
  const handleOpen = () => {
  setOpen(true);
  };
  
  const handleClose = () => {
  setOpen(false);
  };
  

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredImagesPlan1 = imagesPlan1.filter(
    (image) => image.descricao.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredImagesPlan2 = imagesPlan2.filter(
    (image) => image.descricao.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredImagesPlan3 = imagesPlan3.filter(
    (image) => image.descricao.toLowerCase().includes(filter.toLowerCase())
  );

  // Determine which set of images to display based on the filter state
  const displayImagesPlan1 = filter ? filteredImagesPlan1 : imagesPlan1;

  const displayImagesPlan2 = filter ? filteredImagesPlan2 : imagesPlan2;

  const halfwayIndex = Math.ceil(displayImagesPlan2.length / 2);
  const firstHalfDisplayImagesPlan2 = displayImagesPlan2.slice(0, halfwayIndex);
  const secondHalfDisplayImagesPlan2 = displayImagesPlan2.slice(halfwayIndex);

  const displayImagesPlan3 = filter ? filteredImagesPlan3 : imagesPlan3;

  let firstThirdDisplayImagesPlan3 = [];
  let secondThirdDisplayImagesPlan3 = [];
  let thirdThirdDisplayImagesPlan3 = [];

  if (displayImagesPlan3.length === 1) {
    // Caso haja apenas uma imagem, ela será repetida nos três arrays
    firstThirdDisplayImagesPlan3 = [...displayImagesPlan3];
    secondThirdDisplayImagesPlan3 = [...displayImagesPlan3];
    thirdThirdDisplayImagesPlan3 = [...displayImagesPlan3];
  } else {
    const oneThird = Math.ceil(displayImagesPlan3.length / 3);
    const twoThirds = oneThird * 2;

    firstThirdDisplayImagesPlan3 = displayImagesPlan3.slice(0, oneThird);
    secondThirdDisplayImagesPlan3 = displayImagesPlan3.slice(oneThird, twoThirds);
    thirdThirdDisplayImagesPlan3 = displayImagesPlan3.slice(twoThirds);
  }


  return (
    <div className='body'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        >
        <Paper sx={styleModal}>
          {selectedImg && (
            <div style={{width: '80%', height: '80%'}}>
            <div style={{width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column'}}>
              <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <Slider  settings={settingsSlidesModal}>
                  {link.map((link) => (
                  <Slide key={link}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={link}
                      sx={{
                        minWidth: 225,
                        maxWidth: 750,
                        height: '100%',
                        cursor: 'pointer',
                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        transform: 'scale(0.8)', // Add a smooth transition
                        '&:hover': {
                          transform: 'scale(0.9)', // Scale to 1.1 times the original size on hover
                        },
                      }}
                    />
                  </Slide>
                  ))}
                </Slider>
              </div>
              <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <Slider  settings={settingsSlidesModalSub}>
                {link.map((link) => (
                  <Slide key={link}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={link}
                      sx={{
                        minWidth: 225,
                        maxWidth: 750,
                        height: '100%',
                        cursor: 'pointer',
                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease-in-out',
                        transform: 'scale(0.8)', // Add a smooth transition
                        '&:hover': {
                          transform: 'scale(0.9)', // Scale to 1.1 times the original size on hover
                        },
                      }}
                    />
                  </Slide>
                  ))}
                </Slider>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Typography variant="h2" sx={{color: 'black',}}>
                  {selectedImg.descricao}
            </Typography>
            </div>
            </div>
          )}
        </Paper>
    </Modal>
      {!loading && (
      <Slider settings={settingsCircleSlider}>
        {displayImagesPlan1.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}
          >
            <Card
              key={card.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 50,
                maxWidth: 75,
                minHeight: 50,
                maxHeight: 75,
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                transform: 'scale(1)', // Add a smooth transition
                '&:hover': {
                  transform: 'scale(1.1)', // Scale to 1.1 times the original size on hover
                },
              }}
            >
              <img
                src={card.link}
                alt={card.descricao}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Card>
          </Slide>
        ))}
      </Slider>
      )}
    <div className={styles.searchBar}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBotton: 16 }}
      >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="Pesquisar">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={t("pesquisar")}
          inputProps={{ 'aria-label': 'Procurar' }}
          onChange={(e)=>{
            setFilter(e.target.value);
          }}
        />
        
      </Paper>
    </div>
      {!loading && (
      <Slider settings={settings}>
        {firstHalfDisplayImagesPlan2.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
              />

          </Slide>
        ))}
      </Slider>
      )}
      {/* <Divider component="div" role="presentation" /> */}
      {!loading && (
      <Slider settings={settings}>
        {secondHalfDisplayImagesPlan2.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              />

          </Slide>
        ))}
      </Slider>
      )}
      {/* Slider de Anuncio ------------------------------> */}
      <Slider settings={settingsAnuncioSlider}>
        {anuncios.map((card) => (
          <Slide key={card.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.imagem}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 1200,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  transform: 'scale(0.8)',
                }}
                onClick={(e)=> {window.location.href = card.link;}}
              />

          </Slide>
        ))}
      </Slider>
      {/* -------------------------------------------------> */}
      <Slider settings={settings}>
        {displayImagesPlan3.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
              />

          </Slide>
        ))}
      </Slider>
      <Slider settings={settings}>
        {firstThirdDisplayImagesPlan3.map((card) => (
          <Slide key={card.id} onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
              />

          </Slide>
        ))}
      </Slider>
      <Slider settings={settings}>
        {secondThirdDisplayImagesPlan3.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}
          >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
              />

          </Slide>
        ))}
      </Slider>
      <Slider settings={settings}>
        {thirdThirdDisplayImagesPlan3.map((card) => (
          <Slide key={card.id}
          onClick={(e) => {
            e.preventDefault();
            setSelectedImg(card);
            setLink([card.link,card.lnk2,card.lnk3,card.lnk4,card.lnk5])
            setOpen(true);
            console.log(open);
          }}
          >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={card.link}
                key={card.id}
                sx={{
                  minWidth: 225,
                  maxWidth: 225,
                  minHeight: 350,
                  maxHeight: 350,
                  transition: 'transform 0.3s',
                  transform: 'scale(0.8)', // Add a smooth transition
                  '&:hover': {
                    transform: 'scale(1)', // Scale to 1.1 times the original size on hover
                  },
                  cursor: 'pointer',
                }}
              />

          </Slide>
        ))}
      </Slider>
      
    </div>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  let imagesPlan1 = [];
  let imagesPlan2 = [];
  let imagesPlan3 = [];
  let anuncios = [];

  try {
    const response = await api.get('imagens-plan1');
    if (response.data.length > 0) {
      imagesPlan1 = response.data;
    }
    const response2 = await api.get('imagens-plan2');
    if (response2.data.length > 0) {
      imagesPlan2 = response2.data;
    }
    const response3 = await api.get('imagens-plan3');
    if (response3.data.length > 0) {
      imagesPlan3 = response3.data;
    }
    const response4 = await api.get('anunciosAtivos');
    if (response4.data.length > 0) {
      anuncios = response4.data;
    }
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      imagesPlan1,
      imagesPlan2,
      imagesPlan3,
      anuncios,
    },
    revalidate: 60 * 60,
  };
};


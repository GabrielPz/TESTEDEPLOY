import { Slider, SliderProps, Slide } from '../components/commons/Slider';
import styles from './styles.module.css';


export const settings: SliderProps = {
    slidesPerView: 8.25,
    spaceBetween: 12,
    loop: true,
    loopAddBlankSlides: true,
    navigation: true,
    
  };
  export const settingsSlidesModal: SliderProps = {
    slidesPerView: 1,
    // spaceBetween: 4,
    // pagination: true,
    navigation: true,
    // loop: true,
  };
  export const settingsSlidesModalSub: SliderProps = {
    slidesPerView: 3,
    spaceBetween: 1,
    // pagination: true,
    // navigation: true,

    loop: true,
    loopAddBlankSlides: true,
  };
  export const settingsCircleSlider: SliderProps = {
    slidesPerView: 11.50,
    spaceBetween: 1,
    loop: true,
    loopAddBlankSlides: true,
    // pagination: {
    //   clickable: true,
    // },
    
  };
  export const settingsAnuncioSlider: SliderProps = {
    slidesPerView: 2.25,
    spaceBetween: 1,
    loop: true,
    loopAddBlankSlides: true,
    // pagination: {
    //   clickable: true,
    // },
    className: styles.anuncioSlider,
  };

  export const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    width: '75%',
    height: '75%',
    bgcolor: 'white',
    // bgcolor: '#1f1d1dbc',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex', // Here you specify the flex container
    flexDirection: 'row',
    alignItems: 'center', 
    // justifyContent: 'center'
  };

  export  const cssForCard ={
    marginTop: 3,
    display: 'flex',
    minWidth: 650,
    maxWidth: 700,
    minHeight: 350,
    maxHeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
}
  export  const cssForCard2 ={
    marginTop: 3,
    display: 'flex',
    width: '30%',
    minHeight: 250,
    alignItems: 'center',
    justifyContent: 'center',
}
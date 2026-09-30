/**
 * DATOS DEL PORTAFOLIO - ALBERT TATUADOR (@albert_tattoo_rd)
 * 
 * Fotografías reales extraídas de las publicaciones de Instagram de Albert.
 * Importadas directamente para que Vite las empaquete correctamente en producción (Vercel, Netlify, etc.)
 */

import photoDax from '../assets/images/albert_real_Dax9osiRmYd.jpg';
import photoDYB from '../assets/images/albert_real_DYBF5zbjlMC.jpg';
import photoDXe from '../assets/images/albert_real_DXe3ThZkZIY.jpg';
import photoDXI from '../assets/images/albert_real_DXI5cS6DlD_.jpg';
import photoDW2 from '../assets/images/albert_real_DW2cP8qAV20.jpg';
import photoDUY from '../assets/images/albert_real_DUYbOjGjngT.jpg';
import photoDUH from '../assets/images/albert_real_DUHYoK_DpG9.jpg';
import photoDT5 from '../assets/images/albert_real_DT5tl-hjhb_.jpg';

export interface RealInstagramPost {
  id: string;
  shortcode: string;
  url: string;
  title: string;
  image: string;
  details: string;
}

export const ALBERT_REAL_POSTS: RealInstagramPost[] = [
  {
    id: 'post-1',
    shortcode: 'Dax9osiRmYd',
    url: 'https://www.instagram.com/p/Dax9osiRmYd/?hl=es-la',
    title: 'Tatuaje 01',
    image: photoDax,
    details: 'Diseño en piel con contraste profundo y gradiente de sombra.'
  },
  {
    id: 'post-2',
    shortcode: 'DYBF5zbjlMC',
    url: 'https://www.instagram.com/p/DYBF5zbjlMC/?hl=es-la',
    title: 'Tatuaje 02',
    image: photoDYB,
    details: 'Trabajo detallado con precisión de trazo.'
  },
  {
    id: 'post-3',
    shortcode: 'DXe3ThZkZIY',
    url: 'https://www.instagram.com/p/DXe3ThZkZIY/?hl=es-la',
    title: 'Tatuaje 03',
    image: photoDXe,
    details: 'Composición personalizada adaptada a la anatomía.'
  },
  {
    id: 'post-4',
    shortcode: 'DXI5cS6DlD_',
    url: 'https://www.instagram.com/p/DXI5cS6DlD_/?hl=es-la',
    title: 'Tatuaje 04',
    image: photoDXI,
    details: 'Detalle de saturación y textura continua.'
  },
  {
    id: 'post-5',
    shortcode: 'DW2cP8qAV20',
    url: 'https://www.instagram.com/p/DW2cP8qAV20/?hl=es-la',
    title: 'Tatuaje 05',
    image: photoDW2,
    details: 'Composición dinámica y balance visual en piel.'
  },
  {
    id: 'post-6',
    shortcode: 'DUYbOjGjngT',
    url: 'https://www.instagram.com/p/DUYbOjGjngT/?hl=es-la',
    title: 'Tatuaje 06',
    image: photoDUY,
    details: 'Trazo nítido y curvas continuas.'
  },
  {
    id: 'post-7',
    shortcode: 'DUHYoK_DpG9',
    url: 'https://www.instagram.com/p/DUHYoK_DpG9/?hl=es-la',
    title: 'Tatuaje 07',
    image: photoDUH,
    details: 'Pieza de gran formato y profundidad.'
  },
  {
    id: 'post-8',
    shortcode: 'DT5tl-hjhb_',
    url: 'https://www.instagram.com/p/DT5tl-hjhb_/?hl=es-la',
    title: 'Tatuaje 08',
    image: photoDT5,
    details: 'Equilibrio de luces y sombras en acabado de alta definición.'
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  aspect: 'vertical' | 'horizontal' | 'square' | 'featured';
  imageSrc: string;
  details: string;
  instagramUrl: string;
  shortcode: string;
  spanClass: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Tatuaje 01',
    aspect: 'vertical',
    imageSrc: photoDax,
    details: 'Diseño en piel con contraste profundo y sombras.',
    instagramUrl: 'https://www.instagram.com/p/Dax9osiRmYd/?hl=es-la',
    shortcode: 'Dax9osiRmYd',
    spanClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'work-2',
    title: 'Tatuaje 02',
    aspect: 'square',
    imageSrc: photoDYB,
    details: 'Trabajo detallado con precisión de trazo.',
    instagramUrl: 'https://www.instagram.com/p/DYBF5zbjlMC/?hl=es-la',
    shortcode: 'DYBF5zbjlMC',
    spanClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'work-3',
    title: 'Tatuaje 03',
    aspect: 'horizontal',
    imageSrc: photoDUY,
    details: 'Composición fluida adaptada anatómicamente.',
    instagramUrl: 'https://www.instagram.com/p/DUYbOjGjngT/?hl=es-la',
    shortcode: 'DUYbOjGjngT',
    spanClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'work-4',
    title: 'Tatuaje 04',
    aspect: 'featured',
    imageSrc: photoDXe,
    details: 'Composición personalizada con sombreado de alta densidad.',
    instagramUrl: 'https://www.instagram.com/p/DXe3ThZkZIY/?hl=es-la',
    shortcode: 'DXe3ThZkZIY',
    spanClass: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'work-5',
    title: 'Tatuaje 05',
    aspect: 'square',
    imageSrc: photoDXI,
    details: 'Gradientes continuos y definición en piel.',
    instagramUrl: 'https://www.instagram.com/p/DXI5cS6DlD_/?hl=es-la',
    shortcode: 'DXI5cS6DlD_',
    spanClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'work-6',
    title: 'Tatuaje 06',
    aspect: 'horizontal',
    imageSrc: photoDW2,
    details: 'Líneas limpias combinadas con degradados sutiles.',
    instagramUrl: 'https://www.instagram.com/p/DW2cP8qAV20/?hl=es-la',
    shortcode: 'DW2cP8qAV20',
    spanClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'work-7',
    title: 'Tatuaje 07',
    aspect: 'vertical',
    imageSrc: photoDUH,
    details: 'Composición de gran escala y profundidad.',
    instagramUrl: 'https://www.instagram.com/p/DUHYoK_DpG9/?hl=es-la',
    shortcode: 'DUHYoK_DpG9',
    spanClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'work-8',
    title: 'Tatuaje 08',
    aspect: 'square',
    imageSrc: photoDT5,
    details: 'Equilibrio riguroso entre luz y sombras.',
    instagramUrl: 'https://www.instagram.com/p/DT5tl-hjhb_/?hl=es-la',
    shortcode: 'DT5tl-hjhb_',
    spanClass: 'md:col-span-1 md:row-span-1'
  }
];

export const ARTIST_INFO = {
  name: 'Albert',
  tagline: 'Tinta que cuenta tu historia.',
  handle: '@albert_tattoo_rd',
  instagramUrl: 'https://instagram.com/albert_tattoo_rd',
  phoneDisplay: '809 969 9707',
  phoneInternational: '+18099699707',
  whatsappUrl: 'https://wa.me/18099699707',
  address: 'Calle Bonó #174 con Emilio Prud\'Homme',
  addressDisplay: 'Calle Bonó 174, esquina Emilio Prud\'Homme',
  city: 'República Dominicana',
  schedule: 'Lunes a Sábado: 10:00 AM – 7:00 PM (Previa Cita)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Bono+174+Emilio+Prud+Homme+Republica+Dominicana',
  heroImage: photoDax
};

// Importação de imagens de banners
import bannerBolsas from './banners/bolsas.png';
import bannerRelogio from './banners/relogio.png';
import bannerTablet from './banners/tablet.png';

// Importação de imagens de breadcrumb
import breadcrumbCasaco from './breadcrumb/casaco.png';
import breadcrumbJaqueta from './breadcrumb/jaqueta.png';
import breadcrumbCalca from './breadcrumb/calca.png';
import breadcrumbVestido from './breadcrumb/vestido.png';

// Importação de imagens de produtos - Roupas
import blazerGrafiteFront from './products/roupas/blazer/blazerGrafite/front.png';
import blazerGrafiteBack from './products/roupas/blazer/blazerGrafite/back.png';
import bomberJacketImage from './products/roupas/jaquetas/bomberJacket/image.png';
import bomberJacketBack from './products/roupas/jaquetas/bomberJacket/back.png';
import furryJacketFront from './products/roupas/jaquetas/furryJacket/front.png';
import furryJacketBack from './products/roupas/jaquetas/furryJacket/back.png';
import racingJacketFront from './products/roupas/jaquetas/racingJacket/front.png';
import racingJacketBack from './products/roupas/jaquetas/racingJacket/back.png';
import leatherOvercoatFront from './products/roupas/Casacos/leatherOvercoat/front.png';
import leatherOvercoatBack from './products/roupas/Casacos/leatherOvercoat/back.png';

// Importação de imagens de produtos - Eletrônicos
import instaxMini8 from './products/eletronicos/cameras/instaxmini8.png';
import instaxMini41 from './products/eletronicos/cameras/instaxmini41.png';
import instaxMini90 from './products/eletronicos/cameras/instaxmini90.png';
import instaxMini12 from './products/eletronicos/cameras/instaxmini12.png';

export const bannerImages = {
  bolsas: bannerBolsas,
  relogio: bannerRelogio,
  tablet: bannerTablet,
};

export const breadcrumbImages = {
  casaco: breadcrumbCasaco,
  jaqueta: breadcrumbJaqueta,
  calca: breadcrumbCalca,
  vestido: breadcrumbVestido,
};

export const productImages = {
  roupas: {
    blazer: {
      blazerGrafite: {
        front: blazerGrafiteFront,
        back: blazerGrafiteBack,
      },
    },
    jaquetas: {
      bomberJacket: {
        image: bomberJacketImage,
        back: bomberJacketBack,
      },
      furryJacket: {
        front: furryJacketFront,
        back: furryJacketBack,
      },
      racingJacket: {
        front: racingJacketFront,
        back: racingJacketBack,
      },
    },
    casacos: {
      leatherOvercoat: {
        front: leatherOvercoatFront,
        back: leatherOvercoatBack,
      },
    },
  },
  eletronicos: {
    cameras: {
      instaxMini8,
      instaxMini41,
      instaxMini90,
      instaxMini12,
    },
  },
};

export default {
  bannerImages,
  breadcrumbImages,
  productImages,
};

import { productImages } from '../assets/images/index.js';
import { jackets as jacketsStore, cameras as camerasStore } from '../store/products.js';

export const jackets = jacketsStore.map((p) => {
  switch (p.id) {
    case 'j1':
      return {
        ...p,
        title: 'app.products.roupas.blazer.blazerGrafite.title',
        imageUrl: productImages.roupas.blazer.blazerGrafite.front,
        images: [
          productImages.roupas.blazer.blazerGrafite.front,
          productImages.roupas.blazer.blazerGrafite.back,
        ],
      };
    case 'j2':
      return {
        ...p,
        title: 'app.products.roupas.jaquetas.bomberJacket.title',
        imageUrl: productImages.roupas.jaquetas.bomberJacket.image,
        images: [
          productImages.roupas.jaquetas.bomberJacket.image,
          productImages.roupas.jaquetas.bomberJacket.back,
        ],
      };
    case 'j3':
      return {
        ...p,
        title: 'app.products.roupas.jaquetas.furryJacket.title',
        imageUrl: productImages.roupas.jaquetas.furryJacket.front,
        images: [
          productImages.roupas.jaquetas.furryJacket.front,
          productImages.roupas.jaquetas.furryJacket.back,
        ],
      };
    case 'j5':
      return {
        ...p,
        title: 'app.products.roupas.casacos.leatherOvercoat.title',
        imageUrl: productImages.roupas.casacos.leatherOvercoat.front,
        images: [
          productImages.roupas.casacos.leatherOvercoat.front,
          productImages.roupas.casacos.leatherOvercoat.back,
        ],
      };
    default:
      return p;
  }
});

export const cameras = camerasStore.map((p) => {
  switch (p.id) {
    case 'c1':
      return {
        ...p,
        title: 'app.products.eletronicos.cameras.instaxMini8.title',
        imageUrl: productImages.eletronicos.cameras.instaxMini8,
        images: [productImages.eletronicos.cameras.instaxMini8],
      };
    case 'c2':
      return {
        ...p,
        title: 'app.products.eletronicos.cameras.instaxMini41.title',
        imageUrl: productImages.eletronicos.cameras.instaxMini41,
        images: [productImages.eletronicos.cameras.instaxMini41],
      };
    case 'c3':
      return {
        ...p,
        title: 'app.products.eletronicos.cameras.instaxMini90.title',
        imageUrl: productImages.eletronicos.cameras.instaxMini90,
        images: [
          productImages.eletronicos.cameras.instaxMini90,
          productImages.eletronicos.cameras.instaxMini90,
        ],
      };
    case 'c4':
      return {
        ...p,
        title: 'app.products.eletronicos.cameras.instaxMini12.title',
        imageUrl: productImages.eletronicos.cameras.instaxMini12,
        images: [productImages.eletronicos.cameras.instaxMini12],
      };
    default:
      return p;
  }
});

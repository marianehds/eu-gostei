const publicBase = import.meta.env.BASE_URL

export const jackets = [
  { id: 'j1', title: 'jaqueta de couro', price: 199.9, imageUrl: `${publicBase}images/products/blazer/front.png`, images: [`${publicBase}images/products/blazer/front.png`, `${publicBase}images/products/blazer/back.png`] },
  { id: 'j2', title: 'trench coat', price: 249.9, imageUrl: `${publicBase}images/products/bomberJacket/image.png`, images: [`${publicBase}images/products/bomberJacket/image.png`, `${publicBase}images/products/bomberJacket/back.png`] },
  { id: 'j3', title: 'jaqueta de sarja', price: 159.9, imageUrl: `${publicBase}images/products/furryJacket/front.png`, images: [`${publicBase}images/products/furryJacket/front.png`, `${publicBase}images/products/furryJacket/back.png`] },
  { id: 'j4', title: 'moletom', price: 129.9, imageUrl: `${publicBase}images/products/leatherOvercoat/front.png`, images: [`${publicBase}images/products/leatherOvercoat/front.png`, `${publicBase}images/products/leatherOvercoat/back.png`] },
]

export const cameras = [
  { id: 'c1', title: 'câmera vintage', price: 349.9, imageUrl: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=800&q=80' },
  { id: 'c2', title: 'lente 50mm', price: 219.0, imageUrl: 'https://images.unsplash.com/photo-1526178618718-3da4a6b12a14?w=800&q=80' },
  { id: 'c3', title: 'tripé compacto', price: 89.9, imageUrl: 'https://images.unsplash.com/photo-1508443312227-4a6b86f7030f?w=800&q=80' },
  { id: 'c4', title: 'mochila para câmera', price: 129.9, imageUrl: 'https://images.unsplash.com/photo-1537812456756-d225c34a9c0f?w=800&q=80' },
] 
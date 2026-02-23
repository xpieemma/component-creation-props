
import type { Product, User } from "../..";

export const INITIAL_USER: User = {
  id: '1',
  name: 'E. Pierre',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://avatars.githubusercontent.com/u/156770399?s=400&u=558f6b494fb9d9080870c6b529b88f7468cdec3f&v=4'
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlU7ixye3Q9BVjGNwusQOCrlX9yTcKjY69A&s',
    inStock: true
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    description: 'Track your fitness and stay connected with this smart watch.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhguwA2DKFBtBpC_yAojzrnxzMvT3P2C25w&s',
    inStock: true
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 89.99,
    description: 'Portable speaker with amazing sound quality.',
    imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9130.jpg?auto=webp&quality=75&width=1024',
    inStock: false
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'Tactile and responsive mechanical keyboard with RGB lighting.',
    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500797_sd.jpg;maxHeight=1920;maxWidth=900?format=webp',
    inStock: true
  },
  {
    id: '5',
    name: 'Ergonomic Mouse',
    price: 59.99,
    description: 'Designed for comfort and precision during long work hours.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0493/9834/9974/files/E1.png?v=1744787878',
    inStock: true
  }
];
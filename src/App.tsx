import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import ProductDisplay from './components/ProductDisplay/ProductDisplay';

function App() {
  
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://picsum.photos/200/200'
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://picsum.photos/600/600?v=2',
    inStock: true
  };

  return (
    <>

      {/* Example usage of the AlertBox component. */}

        <AlertBox type="success" message="This is a success alert!" onClose={() => alert('Alert closed!')}>
          <p>Additional information about the success alert.</p>
        </AlertBox>
        
        <AlertBox type="warning" message="This is a warning alert!" onClose={() => alert('Alert closed!')}>
          <p>Additional information about the warning alert.</p>
        </AlertBox>
        
        <AlertBox type="error" message="This is a error alert!" onClose={() => alert('Alert closed!')}>
          <p>Additional information about the error alert.</p>
        </AlertBox>
        
        <AlertBox type="info" message="This is a info alert!" onClose={() => alert('Alert closed!')}>
          <p>Additional information about the info alert.</p>
        </AlertBox>

      {/* Example usage of the UserProfileCard component. */}

        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>

      {/* Example usage of the ProductDisplay component. */}

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>

    </>
  )
}

export default App

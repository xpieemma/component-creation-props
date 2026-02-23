import './App.css';
import { useState } from 'react';
import { INITIAL_PRODUCTS, INITIAL_USER } from './components/utils/MockData';
import { useAlert } from './components/utils/useAlert';
import AlertBox from './components/AlertBox/AlertBox';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import CartSummary from './components/cart/CartSummary';
import EditProfileForm from './components/UserProfileCard/EditProfile';
import { useCart } from './components/utils/UseCart';
import type { User } from '.';


const App = () => {
  // 1. Logic Hooks
  const { alert, showAlert, hideAlert } = useAlert();
  const { cartItems, addToCart, removeOne, removeAll, totalPrice } = useCart(INITIAL_PRODUCTS, showAlert);
  
  // 2. Local State
  const [user, setUser] = useState(INITIAL_USER);
  const [isEditing, setIsEditing] = useState(false);

  const handleUserUpdate = (updatedFields: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updatedFields }));
    setIsEditing(false);
    showAlert('success', 'Profile updated successfully!');
  };

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-8">
  
      {alert.visible && (
        <div className="fixed top-4 right-4 z-50 w-80 shadow-2xl">
          <AlertBox type={alert.type} message={alert.message} onClose={hideAlert} />
        </div>
      )}

      <header className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-3xl font-black text-gray-800">PS Store</h1>
        <div className="text-2xl cursor-pointer hover:scale-110 transition-transform">
          🛒 <span className="font-bold">{cartItems.length}</span>
        </div>
      </header>


         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  
  {/* Left Column: Profile (Takes 1/3 space) */}
  <aside className="lg:col-span-1 space-y-8">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
      {isEditing ? (
        <EditProfileForm 
          user={user} 
          onSave={handleUserUpdate} 
          onCancel={() => setIsEditing(false)} 
        />
      ) : (
        <UserProfileCard 
          user={user} 
          showEmail 
          showRole 
          onEdit={() => setIsEditing(true)} 
        />
      )}
    </div>
  </aside>

  {/* Right Column: Cart Summary (Takes 2/3 space) */}
  <div className="lg:col-span-2">
    <CartSummary 
      cartItems={cartItems} 
      products={INITIAL_PRODUCTS} 
      totalPrice={totalPrice}
      onRemoveOne={removeOne}
      onRemoveAll={removeAll}
    />
  </div>
</div>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold">Featured Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INITIAL_PRODUCTS.map(product => (
              <ProductDisplay 
                key={product.id} 
                product={product} 
                showDescription 
                showStockStatus 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;

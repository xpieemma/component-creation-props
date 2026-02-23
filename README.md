
# Lab 1: Component Creation & Props

## Summary

This project is a React component library built with TypeScript that demonstrates reusable UI components for internal applications. The library includes three core components: AlertBox for notifications, UserProfileCard for displaying user information, and ProductDisplay for showcasing product details. The components are styled with Tailwind CSS and designed to be composable, type-safe, and flexible for various use cases across multiple applications.

## Setup and Usage

- Clone the repository.

```
git clone https://github.com/shanosha/mod-9-lab-1.git
```

- Navigate to the directory.

```
cd mod-9-lab-1
```

- Install the node packages.

```
npm install
```

- Run the Vite development server.

```
npm run dev
```

- Open the server URL in a browser.

## Components

### AlertBox
Displays different types of alert messages with customizable styling based on the alert type.

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info' - Determines the color scheme of the alert
- `message`: string - The main alert text to display
- `onClose?`: () => void - Optional callback function when the close button is clicked
- `children?`: React.ReactNode - Optional additional content to render inside the alert

**Example:**
```tsx
<AlertBox type="success" message="Profile updated successfully!" onClose={() => setShowAlert(false)}>
  <p className="text-sm">You can now continue using the application.</p>
</AlertBox>
```

### UserProfileCard
Displays user profile information with configurable visibility options for email and role.

**Props:**
- `user`: User object containing id, name, email, role, and optional avatarUrl
- `showEmail?`: boolean - Controls whether the email address is displayed
- `showRole?`: boolean - Controls whether the user role is displayed
- `onEdit?`: (userId: string) => void - Optional callback when edit button is clicked
- `children?`: React.ReactNode - Optional additional content to render

**Example:**
```tsx
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => handleEditUser(userId)}
>
  <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
</UserProfileCard>
```

### ProductDisplay
Displays product information with shopping functionality and configurable display options.

**Props:**
- `product`: Product object containing id, name, price, description, optional imageUrl, and inStock status
- `showDescription?`: boolean - Controls whether the product description is shown
- `showStockStatus?`: boolean - Controls whether the stock status is displayed
- `onAddToCart?`: (productId: string) => void - Optional callback when add to cart button is clicked
- `children?`: React.ReactNode - Optional additional content to render

**Example:**
```tsx
<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(productId) => handleAddToCart(productId)}
>
  <div className="text-sm text-gray-500">Free shipping available</div>
</ProductDisplay>
```

## Component Composition Example

The components are designed to work together seamlessly, demonstrating how they can be composed in a real application:

```tsx
const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};
```

## Reflections

**How did you handle optional props in your components?**

I used conditional rendering with the boolean AND operator (`&&`) to display elements only when optional props were provided. For example, the close button in AlertBox only renders if `onClose` exists, and the edit button in UserProfileCard only appears when `onEdit` is provided. I also implemented fallback UI elements like the "No Avatar" placeholder when optional data like `avatarUrl` is missing.

**What considerations did you make when designing the component interfaces?**

I focused on creating interfaces that clearly distinguish between required and optional properties while maintaining flexibility. The interfaces needed to account for all possible props while keeping the components easy to use. I also considered how the components would be composed together, which is why each component accepts `children` props to allow for additional content. The props were designed to be self-documenting with clear boolean flags like `showEmail` and `showDescription` that make the component's behavior obvious when reading the code.

**How did you ensure type safety across your components?**

Type safety was primarily achieved through the TypeScript interfaces defined in the central types file. Each component imports its specific props interface, ensuring that any incorrect prop usage is caught at compile time. The interfaces also help with IDE autocompletion and documentation. I also added runtime checks where appropriate, such as checking if `user` exists before trying to access its properties, and providing fallback values for optional fields.

**What challenges did you face when implementing component composition?**

The main challenge was managing the styling and layout when components are nested within each other. Using Tailwind CSS required careful consideration of class names to ensure proper spacing and alignment when components are composed together. I also had to think about how props would flow through the component hierarchy and ensure that optional children would render correctly without breaking the layout. The example code provided in the lesson was very helpful as a starting point for understanding the expected component structure and behavior.
```
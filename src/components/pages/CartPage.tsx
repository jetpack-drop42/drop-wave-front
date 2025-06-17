
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartHeader from '../cart/CartHeader';
import EmptyCart from '../cart/EmptyCart';
import CartItemsList from '../cart/CartItemsList';
import OrderSummary from '../cart/OrderSummary';
import { Button } from '../ui/button';

const CartPage = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  const shippingCost = getTotalPrice() > 50 ? 0 : 8.99;
  const totalWithShipping = getTotalPrice() + shippingCost;

  console.log('CartPage rendered, items count:', items.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CartHeader />

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartItemsList
              items={items}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
              onClearCart={clearCart}
            />
            <div className="space-y-6">
              <OrderSummary
                subtotal={getTotalPrice()}
                shippingCost={shippingCost}
                total={totalWithShipping}
                items={items}
              />
              <Link to="/checkout">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

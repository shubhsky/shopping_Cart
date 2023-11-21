import { useState, createContext, useContext } from 'react';
import CartModal from './components/CartModal';

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
 
    const handleAdd = (product) => {
        const index = cart.findIndex((item)=>item.id === product.id)
        if(index === -1){
            setCart([...cart,{...product,qty:1}]);
            setTotal(total + product.price)
        }else{
            cart[index].qty++
            console.log(cart)
            setTotal(total + cart[index].price)
        }
        setItem(item+1)
    };

    const handleRemove = (id) => {
        const index = cart.findIndex((item)=>item.id === id)
        if (index !== -1){
            cart[index].qty--;
            setItem(item-1)
            setTotal(total-cart[index].price);
            if(cart[index].qty===0){
                cart.splice(index,1);
            }
        }
        setCart(cart)
    };

    const clear = () => {
        setTotal(0);
        setItem(0);
        setCart([]);
    }

    const toggle = () => {
        setShowCart(!showCart)
    }

    return(
        <itemContext.Provider value={
            {total, item, handleAdd, handleRemove, clear, toggle, cart}
        }>
            {showCart && <CartModal/>}
            {children}
        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CustomItemContext
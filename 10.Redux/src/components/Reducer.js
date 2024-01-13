const Reducer = (cart = [], action) => {
     if(action.type === "ADD"){
          let tempcart = cart.filter((item) => item.id === action.payload.id);
          if(tempcart < 1){
               return [...cart, action.payload ];
          }else{
               alert("بابا داریمش تو سبد خرید")
               return cart;
          }
     }
     return cart;
}

export default Reducer; 
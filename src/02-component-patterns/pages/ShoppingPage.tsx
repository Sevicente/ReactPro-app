import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { count } from 'console';

const product = products[0]


export const ShoppingPage = () => {

    
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        
        <ProductCard
        key={product.id} 
        product={product}
        initialValues={{
            count: 4,
            maxCount: 10
        }}
        >
            {
                ({reset, count, increaseBy, isMaxCountReached, maxCount})=>(

                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                        
                    </>
                )
            }
           
        </ProductCard>
        
    </div>
  )
}



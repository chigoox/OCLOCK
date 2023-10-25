
import { fetchDocument } from '@/app/myCodes/Database';
import OrderItemPage from './OrderItemPage';

async function success() {

    const { orderID } = await fetchDocument('Admin', 'Orders').then(resp => {
        return resp ? resp : {};
    })





    return (
        <div>
            <OrderItemPage orderID={orderID} />
        </div>
    )
}

export default success
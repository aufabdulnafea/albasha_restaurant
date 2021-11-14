import XLogo from '../static/images/svgs/x.svg'
import TrashLogo from '../static/images/svgs/trash.svg'
import WhatsappLogo from '../static/images/svgs/whatsapp.svg'

import languages from '../languages'

export default function Cart(props) {


    const {
        cart,
        onToggleCart,
        language,
        onRemoveProduct,
        total,
        orderText,
        whatsappNumber,
        freeDelivery,
        deliveryCosts,
        min_value_free_delivery
    } = props

    return (
        <div className='cart-container'>
            <div className='cart-container-overlay' onClick={onToggleCart}></div>
            <div className='real-cart-container'>
                <div className='cart-header'>
                    {languages[language].cart.title}
                    <button aria-label='open-cart' className='logo-btn' onClick={onToggleCart}><img src={XLogo} /></button>
                </div>
                <div className='cart-content'>
                    {
                        !freeDelivery ?
                            <div className='free-delivery-hint'>
                                {`${languages[language]?.hints?.free_delivery?.replace('_placeholder1_', min_value_free_delivery)}€`}
                            </div>
                            : null
                    }
                    {
                        !cart.length ?

                            <div className='cart-content-empty'>{languages[language].cart.empty}</div> :
                            // total !== totalWithDelivery ? '' : ''
                            <>
                                <table>
                                    <tbody>
                                        {cart.map((el, i) => (
                                            <tr key={i}>
                                                <th>{`${el.amount}`}</th>
                                                <th>{`x ${el.title[language]}`}</th>
                                                <th>{`${el.price.sale_value ? el.price.sale_value : el.price.value * el.amount}${el.price.currency}`}</th>
                                                <th>
                                                    <button
                                                        className='logo-btn'
                                                        onClick={() => onRemoveProduct(i)}
                                                    ><img src={TrashLogo} /></button>
                                                </th>
                                            </tr>
                                        ))}

                                        <tr>
                                            <th>1</th>
                                            <th>x {languages[language].cart.delivery}</th>
                                            <th>{!freeDelivery ? `${deliveryCosts}€` : '0€'}</th>
                                            {/* <th>{'0€'}</th> */}
                                            <th></th>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className='cart-total-price'>
                                    <div>{languages[language].cart.total}:</div>
                                    <div className='price-with-mwst-note'>
                                        {freeDelivery ? `${total}€` : `${total + deliveryCosts}€`}
                                        <div className='mwst-note'>
                                            inkl. MwSt.
                                        </div>
                                    </div>
                                </div>
                                <a className='cart-order-button' href={`https://wa.me/${whatsappNumber}/?text=${orderText}`}>
                                    {languages[language].cart.button}
                                    <img src={WhatsappLogo} />
                                </a>
                            </>
                    }

                </div>
            </div>

        </div >
    )
}
import React from 'react'

import CartLogo from '../static/images/svgs/cart.svg'
import Logo from '../static/images/logo.webp'

export default function Header(props) {
    const { name, cart, onToggleCart } = props
    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <a href='#'>
                        <img src={Logo} alt='logo' />
                        {name}
                    </a>
                </div>

                <div className='right-side'>

                    <div onClick={onToggleCart} className={`cart-handler ${cart ? 'cart-not-empty' : null}`}>
                        <img src={CartLogo} alt="React Logo" />
                    </div>
                    <div className='language-handler'>
                        <select onChange={props.onLanguageChange}>
                            <option value='english'>English</option>
                            <option className='arabic' value='arabic'>عربي</option>
                            <option value='german'>Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}
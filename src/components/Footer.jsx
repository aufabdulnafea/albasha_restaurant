import Logo from '../static/images/logo.webp'
import languages from '../languages'

export default function Footer(props) {
    const { language } = props
    return (
        <footer>
            <div className='container'>
                <div className='logo-side'>
                    <a href='#'>
                        <img src={Logo} alt='logo' />
                        <div>
                            <div className='footer-name'>{languages[language].name}</div>
                            <div className='footer-hero'>{languages[language].hero}</div>
                        </div>
                    </a>

                </div>
                <div className='info-side'>
                    <ul>
                        <li><a href='#'>{languages[language].footer.about}</a></li>
                        <li><a href='#'>{languages[language].footer.contact}</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
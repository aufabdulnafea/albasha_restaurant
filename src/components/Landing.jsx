import languages from "../languages"

export default function Landing(props) {
    const { language } = props
    return (
        <div className='landing'>
            <div className='landing-content'>
                {languages[language]?.hero}
            </div>
        </div>
    )
}
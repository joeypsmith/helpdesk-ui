import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
    <section className="public">
        <header>
            <h1>&lt;helpDeskAPI&gt;</h1>
        </header>
        <main>
            
        </main>
        <footer>
            <div>
            <Link to="/login" className="auth_button"><FontAwesomeIcon icon={faRightToBracket} /> login</Link>
            <Link to="/login" className="auth_button"><FontAwesomeIcon icon={faUserPlus}/> create account</Link>
            </div>
        </footer>
    </section>
    )

    return content
}

export default Public
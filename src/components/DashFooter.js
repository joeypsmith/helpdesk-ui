import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {


    const content = (
        <section className="dash">
        <footer>
        <div>Current User: Role(s):</div>
        </footer>
        </section>
    )

    return(content)

}

export default DashFooter
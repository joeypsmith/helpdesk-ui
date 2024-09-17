import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTicket, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DashHeader = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const navHome = () => navigate('/dash')
    const navTickets = () => navigate('/dash/tickets')
    const navUsers = () => navigate('/dash/users')

    const content = (
        <section className="dash">
        <header>
            <div className="dash-title">
                    <h1>&lt;helpDeskAPI&gt;</h1>
                <nav>
                    <button title="Home"
                            onClick={navHome}>
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                    <button title="Tickets"
                            onClick={navTickets}>
                        <FontAwesomeIcon icon={faTicket} />
                    </button>
                    <button title="Users"
                            onClick={navUsers}>
                        <FontAwesomeIcon icon={faUsers} />
                    </button>
                </nav>
            </div>
        </header>
    </section>
    )

    return content

}

export default DashHeader
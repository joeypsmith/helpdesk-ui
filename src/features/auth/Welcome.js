import { Link } from 'react-router-dom'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket'

const Welcome = () => {
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full',
        timeStyle: 'long'
    }).format(date)

    const content=(
        <section className="welcome">
            <header><h1>Recent Updates</h1></header>
            {/* Recent updates here */}
        </section>
    )

    return content
}

export default Welcome
import {useState} from "react"

const HomeBoxHolder = () => {

    const [displayState, setDisplayState] = useState(true)

    return(
        <div className="box">
            <div>
                <button>Unasnwered Questions</button>
                <button>Answered Questions</button>
            </div>
            {/* two links or buttons with state. One for answered and one for ananswered questions map */}
            {/* if link one true, shop map one if not show map two */}
        </div>
    )
}

export default HomeBoxHolder
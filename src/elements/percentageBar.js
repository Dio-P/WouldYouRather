import "../style/percentageBox.css"

const PercentageBar=({totalVotes, questionVotes})=>{
    const percentage = (questionVotes * 100)/totalVotes;
    const barDecoration= {
        width: `${percentage}%`,
        textAlign: 'right'
    }
    return(
    <div className="percentageBoxBox">
        <div className="percentageBox" style={barDecoration}>
            <span>{`${percentage}%`}</span>
        </div>
    </div>
    )
};

export default PercentageBar;
import StatBox from './StatBox'

const Stats = ({ inMovies, inPlanMovies }) => {
    return (
        <div>
            <StatBox inMovies={inMovies} inPlanMovies={inPlanMovies}/>
        </div>
    )
}

export default Stats

import LinkRow from './LinkRow'
import Typography from '@material-ui/core/Typography';

const Header = ({ curScreen, onChange }) => {
    return (
        <div className="Header">
            { curScreen === "list" ?
                <h1 className="Banner">
                    Movie List
                </h1> :
                <h1 className="Banner">
                    Plan To Watch
                </h1>
            }
            
            <LinkRow curScreen={curScreen} onChange={onChange}/>
        </div>
    )
}

export default Header

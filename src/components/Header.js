import LinkRow from './LinkRow'
import Typography from '@material-ui/core/Typography';

const Header = ({ curScreen, onChange }) => {
    return (
        <div className="Header">
            { curScreen === "list" ?
                <Typography variant="h4" component="h1">
                    Movie List
                </Typography> :
                <Typography variant="h4" component="h1">
                    Plan To Watch
                </Typography>
            }
            
            <LinkRow curScreen={curScreen} onChange={onChange}/>
        </div>
    )
}

export default Header

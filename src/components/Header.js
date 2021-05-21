import LinkRow from './LinkRow'
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <div className="Header">
            <Typography variant="h4" component="h1">
                Movie List
            </Typography>
            <LinkRow />
        </div>
    )
}

export default Header

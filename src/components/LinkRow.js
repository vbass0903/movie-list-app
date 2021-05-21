import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const LinkRow = () => {
    return (
        <ButtonGroup color="primary" aria-label="button group">
            <Button>Plan to Watch</Button>
            <Button>Stats</Button>
            {/* <Button>About</Button> */}
        </ButtonGroup>
    )
}

export default LinkRow

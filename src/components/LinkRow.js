import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const LinkRow = ({ curScreen, onChange }) => {
    return (
        <ButtonGroup color="primary" aria-label="button group">
            { curScreen === "list" ?
                <Button onClick={() => onChange("plan")}>Plan to Watch</Button> :
                <Button onClick={() => onChange("list")}>Movie List</Button>
            }
            
            <Button>Stats</Button>
        </ButtonGroup>
    )
}

export default LinkRow

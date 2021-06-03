import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useState } from 'react'

const CategoryList = ({ onSort }) => {
    const [border, setBorder] = useState(["none", "none", "none"])

    const sort = (category) => {
        if (category === 'Title') {
            setBorder(["1px solid white", "none", "none"])
        }
        else if (category === 'Year') {
            setBorder(["none", "1px solid white", "none"])
        }
        else {
            setBorder(["none", "none", "1px solid white"])
        }
        onSort(category)
    }

    return (
        <div className="CategoryList">
            <h3>Poster</h3>
            <h3 style={{border: border[0], cursor: "pointer", textDecoration: "underline"}} onClick={() => sort('Title')}>Title</h3>
            <h3 style={{border: border[1], cursor: "pointer", textDecoration: "underline"}} onClick={() => sort('Year')}>Year</h3>
            <h3 style={{border: border[2], cursor: "pointer", textDecoration: "underline"}} onClick={() => sort('Director')}>Director</h3>
            <h3>Genre</h3>
            <h3>Actors</h3>
        </div>
    )
}

export default CategoryList

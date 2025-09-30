import { Children } from "react"

const FilterButton = () => {
    return (
            <button className = {`filter-btn`}
             data-filter="{type}">
            {Children}
            </button>
    )
}
            export default FilterButton
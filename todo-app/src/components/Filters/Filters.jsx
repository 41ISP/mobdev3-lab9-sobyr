import FilterButton from "../filterButton/FilterBurron"

const Filters = () => {
    const FilterButtons = [
        {
        type: "all",
        name: "Все"
        },
        {
            type: "active",
            name: "Активные"
        },
        {
            type: "completed",
            name: "Завершенные"
        }
    ]
    return (
        <div className="filters">
            {
                FilterButtons.map ((button) => (
                <FilterButton type={button.type}>
                    {button.name}
                    </FilterButton>
                ))}
        </div>
    )
}
export default Filters
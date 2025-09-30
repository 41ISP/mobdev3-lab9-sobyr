const Filters = () => {
    const FilretButtons = [
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
    ]}
    return (
        <div className="filters">
            <button className="filter-btn active" data-filter="all">Все</button>
            <button className="filter-btn" data-filter="active">Активные</button>
            <button className="filter-btn" data-filter="completed">Завершенные</button>
        </div>
    )
}

export default Filters
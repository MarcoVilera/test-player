import "../styles/panel.css"
export function Panel() {
    return (
        <nav className="panel">
            <h2 className="panel-title">Panel</h2>
            <ul className="panel-list">
                <li className="panel-item">
                    <a href="#">Search</a>
                </li>
                <li className="panel-item">
                    <a href="#">Profile</a>
                </li>
                <li className="panel-item">
                    <a href="#">Options</a>
                </li>
            </ul>
        </nav>
    )
}

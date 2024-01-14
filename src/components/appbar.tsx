import { Link } from 'react-router-dom';

function Appbar() {
    return (
        <div className="app-bar">
            <div className="shortcut" onClick={() => console.log('Send Configuration')}>
                {/* <span className="material-icons">send</span> */}
                <Link to="/configs"><p>Configs</p></Link>
            </div>
            <div className="shortcut" onClick={() => console.log('Go to Meters')}>
                {/* <span className="material-icons">dashboard</span> */}
                <Link to="/meters"><p>Meters</p></Link>
            </div>
            <div className="shortcut" onClick={() => console.log('Home')}>
                {/* <span className="material-icons">home</span> */}
                <Link to="/"><p>Home</p></Link>
            </div>
            <div className="shortcut" onClick={() => console.log('Go to Reports')}>
                {/* <span className="material-icons">description</span> */}
                <Link to="/reports"><p>Reports</p></Link>
            </div>
            <div className="shortcut" onClick={() => console.log('Settings')}>
                {/* <span className="material-icons">settings</span> */}
                <Link to="/setting"> <p>Settings</p></Link>
            </div>
        </div>
    )
}


export default Appbar;
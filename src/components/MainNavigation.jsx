import { Link } from "react-router-dom";

function MainNavigation() {
    return (

        <nav>
            <Link to="/"> Home</Link> |
            <Link to="/login"> Login</Link> |

        </nav>
    );
}

export default MainNavigation;

import { Link } from "react-router-dom";

function NotFoundPage() {
    return <div className="main container">
        <h3>This page not found</h3>
        <div>
            <Link to="/">Home page</Link>
        </div>
    </div>
        
}

export { NotFoundPage };
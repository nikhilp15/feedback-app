import Card from "./shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About Page</h1>
                <p>This is project created to practice react.js </p>
                <p>Version 1.0</p>
                <Link to="/">Home</Link>
            </div>
        </Card>
    );
}
export default AboutPage;

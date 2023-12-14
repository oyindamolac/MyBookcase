import { Link } from "react-router-dom";
import'./Header.scss'
export default function Header() {
    return(
        <header>
            <h1>My Bookcase</h1>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/contact">ContactUs</Link>&nbsp;
            <Link to="/bookcase">Bookcase</Link>
            <Link to="/Homepage">HomePage</Link>
        </header>
    )
}

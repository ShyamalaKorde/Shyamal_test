import { Link, NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <ul>
                <button><NavLink to='/category'>Category</NavLink></button>
                <br></br>
                <button><NavLink to='/product'>Product</NavLink></button>
            </ul>
        </div>
    )
}
export default Home
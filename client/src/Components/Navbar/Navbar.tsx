import { CiSearch, CiUser, CiHeart, CiShoppingCart, } from "react-icons/ci";
const Navbar = () =>{
    return(
        <nav className="flex justify-between">
            <div className="flex list-none">
                
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Accessories</li>
            </div>
            <div>
                <h1>LAMASTORE</h1>
            </div>
            <div className="flex list-none">
                <li>Homepage</li>
                <li>About</li>
                <li>Contact</li>
                <li>Store</li>
                <CiSearch />
                <CiUser />
                <CiHeart />
                <CiShoppingCart />
            </div>
        </nav>
    )
}
export default Navbar;
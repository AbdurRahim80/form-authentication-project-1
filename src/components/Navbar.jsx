import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        {user &&
            <>
                <li><Link to='/orders'>Orders</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
            </>
        }
    </>

    const handleSignOut = () => {
        logOut()
            .then(() => console.log("singOut success"))
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="navbar  bg-base-100 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex items-center'><p>{user.email}</p><a onClick={handleSignOut} className="btn btn-sm">Sign Out</a></div>
                            :
                            <Link to='/login'>
                                <button className='btn btn-sm'>Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
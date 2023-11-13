import { Link } from 'react-router-dom';
 
export default function Nav() {
    return (
<nav className="bg-emerald-800 p-4 fixed top-0 w-full z-10 text-amber-300">
      <div className="container mx-auto flex justify-between items-center">
        <div>
              <Link to="/">
                <h2 className="e text-2xl font-bold hover:text-sky-900">Crayon Crafter</h2>
              </Link>
            </div>
            <div className="">
            <ul className="space-x-4">
                <li className="">
                  <Link to="/create">
                    <h4 className=" text-lg hover:text-sky-900">Create Crayons</h4>
                  </Link>
                  <Link to="/boxes">
                    <h4 className=" text-lg hover:text-sky-900">All Boxes</h4>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
}
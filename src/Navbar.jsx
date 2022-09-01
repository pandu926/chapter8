
import { Link }  from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="container">
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >
      DIARIES</Link>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Link to="/register" ><button className="btn btn-outline-success">
          Register
        </button></Link>
        <Link to="/login" classname=""><button className="btn btn-outline-success">
          Login
        </button></Link> 
      </form>
    </div>
  </nav>
</div>
    </>
  );
};

export default Navbar;


import { Link }  from 'react-router-dom';
import './style/navbar.css';
const Navbar = (props) => {
    const logout =()=> {
      sessionStorage.clear();
    }
    
  return (
    <>
      <div className="container" id="body">
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
        <Link to="/register" ><button className="btn btn-outline-success" id={`${props.id}`}>
          Register
        </button></Link>
        <Link to="/login" classname=""><button className="btn btn-outline-success" id={`${props.id}`}>
          Login
        </button></Link> 
        <Link to="/login" classname=""><button onClick={logout} className="btn btn-outline-success" id={`${props.value}`}>
          Logout
        </button></Link> 
      </form>
    </div>
  </nav>
</div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jfif';

const Sidebar = ( {sidebarVisible}) => {
  return (

    <div className={`border-end bg-white ${sidebarVisible ? '' : 'd-none'}`} id="sidebar-wrapper">

        <div className="sidebar-heading border-bottom bg-light">
        <img src={Logo} alt='' height={36} width={36}></img>
        </div>
        <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add"><i className="bi bi-plus-circle"></i> AddFood</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list"><i className="bi bi-card-list"></i> List Food</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders"><i className="bi bi-cart"></i> Orderes</Link>

        </div>
   </div>
  
  )
}

export default Sidebar

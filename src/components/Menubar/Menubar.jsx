import React from 'react';

const Menubar = ( { toggleSidebar}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="container-fluid" >
        <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar}><i className="bi bi-text-left"></i></button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        
        
    </div>
</nav>

  )
}

export default Menubar

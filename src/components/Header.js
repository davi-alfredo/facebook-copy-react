import React from 'react';

function Header(){
  return(
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>          
          {/* <i className="material-icons">account_circle</i> */}
          <img className="avatar" src="https://i.pravatar.cc/150?img=65" />
          <i />
          <span className="navbar">David</span>
          <i />
          <span>|</span>
          <i />
          <span className="navbar">Página Inicial</span>
          <i />
          <span>|</span>
          <i />
          <span className="navbar">Criar</span>
        </div>
      </nav>
    </header>
  );
}
 
export default Header;
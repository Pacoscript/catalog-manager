import React from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar'
import './Layout.css'

const Layout = props => (
 <div>
     <NavBar history={props.history} />
     <main className = 'Content'>
        {props.children}
    </main>
 </div>
);

export default Layout;

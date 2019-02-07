import React from 'react';
import Aux from '../../hoc/aux';
import './layout.css';


const layout = (props) => (
    // here we can use aux instead
    //  of div to wrap up whole code
    <Aux>
        <div>
        Toolbar, Sidebar, Backdrop
        </div>
            <main className="content">
                {props.children}
            </main>
    </Aux>
);
export default layout;
 
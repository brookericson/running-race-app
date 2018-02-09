import React from 'react';

import Aux from '../../hoc/Auxx'

const layout = ( props ) => (
    <Aux>
    <header>
        <nav>
            <ul>
                <li>Races</li>
                <li>Training Plan</li>
                <li>Sign In</li>
            </ul>
        </nav>
    </header>
    <main className="Content">
    {props.children}
    </main>
    </Aux>
);

export default layout;
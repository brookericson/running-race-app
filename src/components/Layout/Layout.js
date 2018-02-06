import React from 'react';

import Aux from '../../hoc/Auxx'

const layout = ( props ) => (
    <Aux>
    <div>navbar, backdrop, login button</div>
    <main className="Content">
    {props.children}
    </main>
    </Aux>
);

export default layout;
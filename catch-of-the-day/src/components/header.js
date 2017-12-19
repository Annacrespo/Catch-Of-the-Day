import React from 'react';

//stateless function
//simplified component intended for components that are pure functions for their props
//replaces reactcomponent and render()

const Header = (props) => {
    return (
        <header className="top">
            <h1>Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}


export default Header;
import React from 'react';


class Header extends React.Component {
    render() {
        return(
            <div>
                <header className="header_area">
                    <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                        <nav className="classy-navbar" id="essenseNav"></nav>
                    </div>
                </header>
            </div>
        )
    }
}


export default Header;
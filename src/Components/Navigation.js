import React from 'react'

export default function Navigation() {
    return (
        <>
            <nav id="navbar-example2" ClassName="navbar bg-body-tertiary px-3 mb-3">
                <a ClassName="navbar-brand" href="/">Navbar</a>
                <ul ClassName="nav nav-pills">
                    <li ClassName="nav-item">
                        <a ClassName="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li ClassName="nav-item">
                        <a ClassName="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li ClassName="nav-item dropdown">
                        <a ClassName="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</a>
                        <ul ClassName="dropdown-menu">
                            <li><a ClassName="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a ClassName="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr ClassName="dropdown-divider"/></li>
                            <li><a ClassName="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" ClassName="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
            </div>
        </>
    )
}

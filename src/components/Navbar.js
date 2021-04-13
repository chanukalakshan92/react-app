import React from 'react'

export const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a class="navbar-brand" href="#">Contact Book</a>
                    <a className="btn btn-light ml-auto">Create contact</a>
                </div>
            </nav>     
        </div>
    )
}

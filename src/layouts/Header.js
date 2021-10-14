/** 
 *  Title : Layouts - Header
 *  Date : 2021.10.09
 *  @honeypigman
 */
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <h2 className="font-extrabold tracking-tight text-green-600 pt-1">
            <Link to="/">Movie Daiso</Link>
        </h2>
    );

};

export default Header;
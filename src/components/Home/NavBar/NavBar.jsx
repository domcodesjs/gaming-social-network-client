import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const NavBar = () => {
    return (
        <StyledMain>
            <div>
                <div className='nav-icon'>
                    <h1>
                        <a href='#menu'>
                            <FaBars />
                        </a>
                    </h1>
                </div>
            </div>
        </StyledMain>
    );
};
const StyledMain = styled.main`
    .nav-icon {
        margin: 2rem;
    }
    a {
        color: white;
    }
`;
export default NavBar;

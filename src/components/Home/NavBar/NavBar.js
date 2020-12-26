import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const NavBar = () => {
    return (
        <StyledNav>
            <button className='mobile-nav-btn'>
                <FaBars />
            </button>
            <div className='desktop-nav-btns'>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    @media (max-width: 700px) {
        .desktop-nav-btns button {
            display: none;
        }
    }
    @media all and (min-width: 700px) {
        .mobile-nav-btn {
            display: none;
        }
        .desktop-nav-btns {
            display: flex;
        }
    }
`;

export default NavBar;

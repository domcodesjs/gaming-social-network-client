import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import backImgMobile from "./images/prple-controller.jpg";
import backImgDesktop from "./images/controller-desktop.jpg";

const Home = () => {
    return (
        <StyledMain>
            <div className='landing-page'>
                <div>
                    <nav>
                        <NavBar />
                    </nav>
                </div>
                <div className='main-content'>
                    <div className='title-motto'>
                        <h1>Gaming Social Network</h1>
                        <span>Connecting Gamers since 2077</span>
                        <button>Sign Up</button>
                    </div>
                    <div className='intro-video'>
                        <iframe
                            title='mock video'
                            src='https://www.youtube.com/embed/eW7Twd85m2g'
                        ></iframe>
                    </div>
                </div>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    background: url(${backImgMobile}) no-repeat;
    background-size: 230% 110%;
    background-position: -40rem -3rem;
    height: 100vh;

    .title-motto {
        padding-top: 14rem;
        text-align: center;
        margin: auto;
    }

    iframe {
        margin: 0 auto;
    }

    h1 {
        color: #14ffec;
        padding-bottom: 0.8rem;
    }

    span {
        color: white;
        font-size: 1.9rem;
    }

    @media (max-width: 700px) {
        .title-motto button {
            display: none;
        }

        iframe {
            display: none;
        }
    }

    @media all and (min-width: 700px) {
        background: url(${backImgDesktop}) no-repeat;
        background-size: 100% 100%;

        .main-content {
            margin-top: 30rem;
            padding: 0.5rem;
        }

        .title-motto {
            width: 50%;
            margin: auto;
            margin-left: 15rem;
            text-align: left;
            float: left;
            display: flex;
            flex-direction: column;
        }

        h1 {
            font-size: 6rem;
        }

        span {
            font-size: 3rem;
        }

        .title-motto button {
            margin-top: 1rem;
            width: 13rem;
            padding: 0.9rem 1rem 0.9rem 1rem;
            border: solid 1px black;
            border-radius: 0.5rem;
            background-color: #0d7377;
            color: white;
        }

        iframe {
            width: 52rem;
            height: 37rem;
            border: none;
            box-shadow: 5px 5px 5px black;
        }
    }
`;

export default Home;

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
                    </div>
                    <div className='intro-video'>
                        <iframe
                            title='mock video'
                            src='https://www.youtube.com/embed/eW7Twd85m2g'
                            autoPlay
                        ></iframe>
                    </div>
                </div>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    * {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    body {
        overflow: hidden;
        max-height: 85rem;
        margin-bottom: 0;
        height: 1000%;
    }
    .title-motto {
        padding-top: 9rem;
        text-align: center;
        margin: auto;
    }
    h1 {
        color: #14ffec;
        padding-bottom: 0.8rem;
    }
    span {
        color: white;
        font-size: 1.9rem;
    }
    .landing-page {
        background-image: url(${backImgMobile});
        background-size: cover;
        background-position: -80rem 0rem;
        padding-bottom: 0;
        overflow-y: hidden;
        position: relative;
        margin: 0;
        padding: 0;
    }
    iframe {
        width: 220;
        height: 220;
    }
    @media all and (min-width: 700px) {
        .landing-page {
            background-image: url(${backImgDesktop});
            background-size: cover;
            background-position: 0rem 0rem;
        }
        .main-content {
            margin-top: 30rem;
            padding: 0.5rem;
        }
        .title-motto {
            width: 60%;
            float: left;
        }
        h1 {
            font-size: 4rem;
        }
        span {
            font-size: 2rem;
        }
        iframe {
            width: 440px;
            height: 290px;
        }
    }
`;

export default Home;

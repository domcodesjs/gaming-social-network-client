import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Games from './components/Games/Games';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Game from './components/Game/Game';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
    // useEffect(() => {
    //   const socket = socketIOClient('ws://localhost:5000');
    //   // socket.on('message', (data) => {
    //   //   console.log(data);
    //   // });
    //   socket.emit('message', {
    //     user_id: 1,
    //     conv_id: 420,
    //     msg: 'from react msg hi bye this working?'
    //   });

    //   socket.on('message', (msg) => {
    //     console.log(msg);
    //   });

    //   return () => socket.disconnect();
    // }, []);

    return (
        <>
            <Router>
                <GlobalStyle></GlobalStyle>
                <StyledWrapper>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/dashboard'>
                            <UserDashboard></UserDashboard>
                        </Route>
                        <Route exact path='/signup'>
                            <Signup></Signup>
                        </Route>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/messages'>
                            <Chat />
                        </Route>
                        <Route exact path='/games'>
                            <Games></Games>
                        </Route>
                        <Route exact path='/:username'>
                            <UserProfile />
                        </Route>
                        <Route exact path='/game/:id'>
                            <Game></Game>
                        </Route>
                        <Route path='/404'>
                            <NotFound></NotFound>
                        </Route>
                        <Redirect to='/404' />
                    </Switch>
                </StyledWrapper>
            </Router>
        </>
    );
};

const StyledWrapper = styled.div`
    width: 28.8rem;
    margin: 0 auto;
    @media (min-width: 576px) {
        width: 50rem;
    }
    @media (min-width: 768px) {
        width: 70rem;
    }
    @media (min-width: 992px) {
        width: 90rem;
    }
    @media (min-width: 1200px) {
        width: 112rem;
    }
`;

export default App;

import React from 'react';
import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header/>
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen/>} exact ></Route> // See exact for routing v6
                        {/*<Route path='/customer/:customerNumber' element={<ShippedProductScreen/>}></Route>*/}
                    </Routes>
                </Container>
            </main>
        </Router>

    )

}

export default App;

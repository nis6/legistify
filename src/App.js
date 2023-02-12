import React from "react";
import Home from "./pages/Home";
import { ChakraProvider, } from '@chakra-ui/react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import myTheme from "./styles/theme";


const App = () => {
    return (
        <ChakraProvider theme={myTheme}>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </ChakraProvider>
    )
}
export default App;
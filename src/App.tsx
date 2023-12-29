import {Route, Routes } from 'react-router-dom';

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Keyword from "./pages/Keyword";
import ProductDate from "./pages/ProductDate";
import Review from "./pages/Review";

import Header from "./components/menu/Header";

import { Box } from '@mui/joy';

const App = () => {
    return (
        <Box sx={{display: 'flex', minHeight: '100dvh'}}>
            <Header/>
            <Box component="main" className="MainContent" sx={{
                px: {xs: 2, md: 6},
                pt: {xs: 'calc(12px + var(--Header-height))', sm: 'calc(12px + var(--Header-height))', md: 3},
                pb: {xs: 2, sm: 2, md: 3},
                flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100dvh', gap: 1,
            }}
            >
                <Box sx={{marginTop: '120px'}}>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/keyword' element={<Keyword/>}/>
                        <Route path='/date' element={<ProductDate/>}/>
                        <Route path='/review' element={<Review/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
};

export default App;
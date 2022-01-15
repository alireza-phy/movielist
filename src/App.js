import MovieTable from "./pages/MovieTable/MovieTable";
import MoviePage from "./pages/MoviePage/MoviePage";
import NavBar from "./components/Navbar/Navbar";

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from "./pages/HomePage/Homepage";

const App = () => {
    return (
        <div className='main_div'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path='/Table' element={<MovieTable/>}/>
                        <Route path='/MoviePage/:id' element={<MoviePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
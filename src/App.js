import { Home } from 'components/Home/Home';
import { Layout } from 'pages/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Games = lazy(() => import('components/Games/Games'));
const GameDetails = lazy(() => import('components/Games/GameDetails.js'));
const Books = lazy(() => import('components/Books/Books'));
const Films = lazy(() => import('components/Films/Films'));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="games/:gameTitle" element={<GameDetails />} />
                <Route path="books" element={<Books />} />
                <Route path="films" element={<Films />} />
            </Route>
        </Routes>
    );
}

export default App;

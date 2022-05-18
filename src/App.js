import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups.js";
import NewMeetupPage from "./pages/NewMeetup.js";
import FavoritesPage from "./pages/Favorites.js";
//import MainNavigation from "./components/layout/MainNavigation";
import Layout from './components/layout/Layout';

function App() {
  //localhost:3000/
  //my-page.com/favorites

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

import { Layout} from "../components"
import { useState, type JSX } from "react";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";

export const AllRoutes = () => {
    const [currentPage, setCurrentPage] = useState('accueil');

  const pages: { [key: string]: { component: JSX.Element; title: string } } = {
    accueil: { component: <HomePage />, title: 'Accueil' },
    users: { component: <UsersPage />, title: 'Utilisateurs' },
    settings: { component: <SettingsPage />, title: 'Paramètres' }
  };

  return (
    <Layout
      currentPage={currentPage}
      currentPageTitle={pages[currentPage].title}
      onPageChange={setCurrentPage}
    >
      {pages[currentPage].component}
    </Layout>
  );
}

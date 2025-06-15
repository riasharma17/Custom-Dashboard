
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

// components
import MenuBar from './components/MenuBar';
import HeaderBar from './components/HeaderBar';
import BottomBar from './components/BottomBar';
import ThemeSettings from './components/ThemeSettings';

// pages
import MainPage from './pages/MainPage';
import OrdersPage from './pages/OrdersPage';
import TeamPage from './pages/TeamPage';
import UsersPage from './pages/UsersPage';
import TaskBoardPage from './pages/TaskBoardPage';
import CalendarPage from './pages/CalendarPage';

// chart pages
import Stacked from './pages/charts/Stacked';
import Pyramid from './pages/charts/Pyramid';
import Line from './pages/charts/Line';
import Area from './pages/charts/Area';
import Bar from './pages/charts/Bar';
import Pie from './pages/charts/Pie';
import Financial from './pages/charts/Financial';
import ColorMapping from './pages/charts/ColorMapping';
import ColorPicker from './pages/ColorPicker';
import Editor from './pages/Editor';

import { useStateContext } from './contexts/ContextProvider';  // relative to src


const App = () => {
  const { theme, toggleTheme, showSidebar } = useStateContext();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Router>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
          {showSidebar && (
            <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
              <MenuBar />
            </aside>
          )}
          <div className="flex flex-col flex-grow">
            <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow p-4">
              <HeaderBar />
            </header>

            {/* Dark Mode Toggle Button */}
            <div className="fixed bottom-5 right-5 z-50">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg"
              >
                <FiSettings />
              </button>
            </div>

            <main className="flex-grow p-6">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/tasks" element={<TaskBoardPage />} />
                <Route path="/calendar" element={<CalendarPage />} />

                {/* Chart routes */}
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />

                {/* Other functional pages */}
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/editor" element={<Editor />} />
              </Routes>
            </main>

            <footer className="bg-white dark:bg-gray-800 text-center py-4">
              <BottomBar />
            </footer>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

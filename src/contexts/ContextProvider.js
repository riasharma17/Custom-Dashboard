// import React, { createContext, useContext, useState } from 'react';

// const StateContext = createContext();

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

// export const ContextProvider = ({ children }) => {
//   const [screenSize, setScreenSize] = useState(undefined);
//   const [currentColor, setCurrentColor] = useState('#03C9D7');
//   const [currentMode, setCurrentMode] = useState('Light');
//   const [themeSettings, setThemeSettings] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(true);
//   const [isClicked, setIsClicked] = useState(initialState);

//   const setMode = (e) => {
//     setCurrentMode(e.target.value);
//     localStorage.setItem('themeMode', e.target.value);
//   };

//   const setColor = (color) => {
//     setCurrentColor(color);
//     localStorage.setItem('colorMode', color);
//   };

//   const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

//   return (
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);

import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Add this export for easy access to context in other components
export const useStateContext = () => useContext(StateContext);



// // import React, { createContext, useContext, useState, useEffect } from 'react';

// // const StateContext = createContext();

// // const initialState = {
// //   chat: false,
// //   cart: false,
// //   userProfile: false,
// //   notification: false,
// // };

// // export const ContextProvider = ({ children }) => {
// //   const [screenSize, setScreenSize] = useState(window.innerWidth);  // initialize with current width
// //   const [currentColor, setCurrentColor] = useState('#03C9D7');
// //   const [currentMode, setCurrentMode] = useState('Light');
// //   const [themeSettings, setThemeSettings] = useState(false);
// //   const [activeMenu, setActiveMenu] = useState(true);
// //   const [isClicked, setIsClicked] = useState(initialState);

// //   // Add this useEffect to update screenSize on window resize
// //   useEffect(() => {
// //     const handleResize = () => setScreenSize(window.innerWidth);

// //     window.addEventListener('resize', handleResize);

// //     // Cleanup listener when component unmounts
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const setMode = (e) => {
// //     setCurrentMode(e.target.value);
// //     localStorage.setItem('themeMode', e.target.value);
// //   };

// //   const setColor = (color) => {
// //     setCurrentColor(color);
// //     localStorage.setItem('colorMode', color);
// //   };

// //   const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

// //   return (
// //     <StateContext.Provider value={{
// //       currentColor,
// //       currentMode,
// //       activeMenu,
// //       screenSize,
// //       setScreenSize,
// //       handleClick,
// //       isClicked,
// //       initialState,
// //       setIsClicked,
// //       setActiveMenu,
// //       setCurrentColor,
// //       setCurrentMode,
// //       setMode,
// //       setColor,
// //       themeSettings,
// //       setThemeSettings,
// //     }}>
// //       {children}
// //     </StateContext.Provider>
// //   );
// // };

// // export const useStateContext = () => useContext(StateContext);

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const StateContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [activeMenu, setActiveMenu] = useState(true);
//   const [screenSize, setScreenSize] = useState(window.innerWidth);
//   const [currentColor, setCurrentColor] = useState('#03C9D7'); // any color you want

//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);
//     window.addEventListener('resize', handleResize);
    
//     handleResize(); // set initial value
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <StateContext.Provider
//       value={{
//         activeMenu,
//         setActiveMenu,
//         screenSize,
//         currentColor,
//         setCurrentColor,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);

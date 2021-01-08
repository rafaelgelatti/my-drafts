import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//   render() {
//     return (
//       // two contexts in the same component
//       <AuthContext.Consumer>{(authContext) => (
//         // context consume in functional/class components
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>context app</h1>
//               <div onClick={toggleAuth}>
//                 {isAuthenticated ? 'Logged in' : 'Logged out'}
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}</ThemeContext.Consumer>
//       )}</AuthContext.Consumer>
//      );
//   }
// }

const NavBar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>context app</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
 
export default NavBar;

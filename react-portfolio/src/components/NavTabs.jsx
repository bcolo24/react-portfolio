// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 40,
//     width: '100%',
//     backgroundColor: '#49111C',
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&.Mui-selected': {
//       color: '#fff',
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }),
// );

// export default function CustomizedTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ bgcolor: '#5E503F' }}>
//         <StyledTabs
//           value={value}
//           onChange={handleChange}
//           aria-label="styled tabs example"
//         >
//           <StyledTab label="Home" />
//           <StyledTab label="About" />
//           <StyledTab label="Projects" />
//           <StyledTab label="Contact" />
//         </StyledTabs>
//         <Box sx={{ p: 3 }} />
//       </Box>
//     </Box>
//   );
// }
// import { Link, useLocation } from 'react-router-dom';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/About"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Projects"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
//         >
//           Blog
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#49111C',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const CombinedTabs = () => {
  const currentPage = useLocation().pathname;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#5E503F' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab
            label="Home"
            component={Link}
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          />
          <StyledTab
            label="About"
            component={Link}
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          />
          <StyledTab
            label="Blog"
            component={Link}
            to="/Blog"
            className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
          />
          <StyledTab
            label="Contact"
            component={Link}
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};

export default CombinedTabs;

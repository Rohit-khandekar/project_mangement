import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import dashboardactive from '../utills/Dashboard-active.svg';
import dashboardicon from '../utills/Dashboard.svg';
import projectlistactive from '../utills/Project-list-active.svg';
import projectlist from '../utills/Project-list.svg';
import createProjectactive from '../utills/create-project-active.svg';
import createProject from '../utills/create-project.svg';
import logouticon from '../utills/Logout.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clearing local storage or sending a logout request to the server
    // After logout, navigate to the login page
    navigate('/login');
  };

  // Replace `isAuth` with your authentication state logic if needed
  const isAuth = true;

  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      bg={'whiteAlpha.400'}
      h={{ base: '50px', md: '100vh' }}
      w={{ base: '100%', md: '80px' }}
      justify="center"
      align="center"
      color="gray"
      position="fixed"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
      left={0}
      bottom={0}
      mt={{ base: '0', md: '0', lg: '0', xl: '0', '2xl': '80px' }}
      display={{ base: 'flex', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'block' }}
      zIndex={1}
    >
      <Flex direction={{ base: 'row', md: 'column' }} gap={'50px'} rowGap={'50px'} align="center">
        <Link to="/dashboard">
          <Box mb={4}>
            <img src={location.pathname === '/dashboard' ? dashboardactive : dashboardicon} alt="Dashboard" />
          </Box>
        </Link>
        <Link to="/list">
          <Box mb={4}>
            <img src={location.pathname === '/list' ? projectlistactive : projectlist} alt="List" />
          </Box>
        </Link>
        <Link to="/add-project">
          <Box mb={4}>
            <img src={location.pathname === '/add-project' ? createProjectactive : createProject} alt="Add Project" />
          </Box>
        </Link>
        {isAuth && (
          <Box mb={4} onClick={handleLogout}>
            <img src={logouticon} alt="logout" />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;

import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import loginbg from '../utills/loginbg.svg';
import Logo from '../utills/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { Client, Account } from 'appwrite';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 6;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value) ? '' : 'Invalid email address',
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(value) ? '' : 'Password must be at least 6 characters long',
    }));
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
  
    const client = new Client();
    const account = new Account(client);
  
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('651525be318d3396ab36');
  
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
  
    setErrors({
      email: emailValid ? '' : 'Invalid email address',
      password: passwordValid ? '' : 'Password must be at least 6 characters long',
    });
  
    if (emailValid && passwordValid) {
      try {
        const promise = account.createEmailSession(email, password);
  
        promise.then(
          function (response) {
            console.log('Success', response);
            navigate('/add-project'); // Navigate to /add-project on success
          },
          function (error) {
            console.log('Error:', error);
            console.error('Invalid credentials. Please check your inputs.');
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: 'Invalid email or password',
              password: 'Invalid email or password',
            }));
          }
        );
  
        console.log('Appwrite is connected');
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  
  return (
    <Box bgImg={loginbg} position="absolute" bgRepeat="no-repeat" w={{ base: '100%', md: 'calc(100% - 80px)' }}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={'20px'} p={'20px'}>
        <Box>
          <Image src={Logo} alt="logo" />
        </Box>
        <Text color={'white'} fontSize={'20px'}>
          Online Project Management
        </Text>
      </Box>
      <Box
        width="325px"
        bgColor="white"
        p={10}
        pb={15}
        mx="auto"
        borderWidth={1}
        borderRadius="15px"
        boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
        mb={'100px'}
      >
        <Text fontSize={'20px'} textAlign={'center'} p={5}>
          Login To Get Started
        </Text>
        <FormControl isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          {errors.email && <Text mt={2} color="red.500" textAlign="left">{errors.email}</Text>}
        </FormControl>

        <FormControl mt={4} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <InputRightElement>
              <IconButton
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleTogglePassword}
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
          {errors.password && <Text mt={2} color="red.500" textAlign="left">{errors.password}</Text>}
        </FormControl>

        <Box w={'100%'} display={'flex'} justifyContent={'center'}>
          <Button
            m={4}
            borderRadius={'20px'}
            p={'0px'}
            w={'200px'}
            colorScheme="teal"
            bg={'#035fb2'}
            color={'white'}
            onClick={handleSubmission}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

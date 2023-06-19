//https://medium.com/loftbr/angular-storybook-6d8ae099ab96
import { create } from '@storybook/theming';


//see theme1, this is just the autumn-version wrt. coloring
//changed values due to V3 not being implemented for testing
export const colors = {
  primary: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  primarycomplement: {
    50: '#f1e8f2',
    100: '#dcc5e0',
    200: '#c79fcd',
    300: '#b07bb7',
    400: '#9f62a7',
    500: '#8f4f98',
    600: '#834991',
    700: '#734287',
    800: '#653c7c',
    900: '#4c3266',
  },
  secondary: {
    50: '#ffe4d0',
    100: '#f1c4b1',
    200: '#d4a18e',
    300: '#b57f69',
    400: '#9f644e',
    500: '#884b33',
    600: '#7c422d',
    700: '#6c3624',
    800: '#5d291d',
    900: '#4c1b14',
  },

  warn: {
    50: '#f8e5e9',
    100: '#efbdc8',
    200: '#e495a5',
    300: '#d97084',
    400: '#cf596c',
    500: '#c74a58',
    600: '#b74555',
    700: '#a24050',
    800: '#8c3a4b',
    900: '#663241',
  },

  gradient:{
   0: 'radial-gradient(circle, #B6806C, #B37E62, #8F7B45, #4C6632)', 
   1: 'radial-gradient(circle, #D29F77, #F1E5DD, #F0EEE9)', 
  },

  intro: {
    50: '#e3f0f7',
    100: '#bad8ed',
    200: '#90c0e1',
    300: '#6aa8d4',
    400: '#4f97cc',
    500: '#3887c5',
    600: '#307ab8',
    700: '#2769a7',
    800: '#1f5995',
    900: '#123d76',
  },

  dark: {
    50: '#f3fcf0',
    100: '#ecf5ea',
    200: '#e4ede1',
    300: '#d4ddd2',
    400: '#b1baaf',
    500: '#919a8f',
    600: '#697167',
    700: '#565e54',
    800: '#373f36',
    900: '#171e16',
  },


};


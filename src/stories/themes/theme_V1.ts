//https://medium.com/loftbr/angular-storybook-6d8ae099ab96
//import { create } from '@storybook/theming';


import {ColorScale,Typography,DesignSystemBase} from 'styled-components';

import {colors as autumn} from './theme_V2';
/*
Some notes based on the research for the angular version:
focus on UI color, font palettes and some other aspects

--> theming: https://www.newline.co/courses/storybook-for-react-apps/theming-the-storybook-app
--> https://material.angular.io/guide/theming
* A theme file is a Sass file that calls 
* Angular Material Sass mixins to output color and typography CSS styles.

* Define palettes
* Define 3 themes: each theme includes 3 palettes:
* primary
* scondary/accent
* warn

@angular:
Since CSS costum properties are recommended by the official angular-webpage
we move to CSS costum properties following the Material concept above and
combine this with some standard globalization-concepts

Please cf. with

* more advanced example via figma, next.js + React: 
* casher - https://github.com/dennis-adamczyk/casher/blob/main/constants/theme.ts
* Thanks...
*
*/


//Typing based on interfaces:
//Because of that, we are working with TypeScript

declare module 'styled-components' {
export interface ColorScale {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string; 
    800: string;
    900: string;
  };
  primarycomplement: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string; 
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string; 
    800: string;
    900: string;
  };
  warn:{
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string; 
    800: string;
    900: string;
  };
  dark:{
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string; 
    800: string;
    900: string;
  };
  gradient:{
    0: string;
    1: string;
  }
}


export interface Typography {
  type: {
    primary: string,
    code: string,
  },
  weight: {
    regular: string,
    bold: string,
    extrabold: string,
    black: string,
  },
  size: {
    s1: string,
    s2: string,
    s3: string,
    m1: string,
    m2: string,
    m3: string,
    l1: string,
    l2: string,
    l3: string,
  },
}


export interface DesignSystemBase {
  coloring: ColorScale;
  sizeBase: number;
  typo: Typography;
  breakpoints: { [size: string]: number };
  mediaQueries: { [size: string]: string };
}



}



/*
* GITHUBTEST UPLOAD PLS WORK ...
* Design System - base - more or less some atomics:
*
*/


 const colors:ColorScale = {
  primary: {
    50: '#dfede4',
    100: '#b3d1ba',
    200: '#85b490',
    300: '#5c9768',
    400: '#43834f',
    500: '#306f3a',
    600: '#2b6432',
    700: '#245627',
    800: '#1a471c',
    900: '#0d2d05',
  },
  primarycomplement: {
    50: '#e7e4eb',
    100: '#c3bcce',
    200: '#9d91ac',
    300: '#79688c',
    400: '#614975',
    500: '#4c2b5f',
    600: '#462558',
    700: '#3e1d4e',
    800: '#351442',
    900: '#25052d',
  },
  secondary: {
    50: '#e5f2fc',
    100: '#c1def9',
    200: '#9ccbf6',
    300: '#79b6f1',
    400: '#63a6ee',
    500: '#5497ea',
    600: '#4e89dc',
    700: '#4777c9',
    800: '#4166b6',
    900: '#364996',
  },

  warn: {
    50: '#fbe6eb',
    100: '#f5c0cd',
    200: '#ef99ad',
    300: '#e8748e',
    400: '#e15d77',
    500: '#dc4e62',
    600: '#cb495f',
    700: '#b5435a',
    800: '#a03e55',
    900: '#7a354b',
  },

  dark: {
    50: '#f2f8f1',
    100: '#e8eee7',
    200: '#dbe1da',       
    300: '#c8cec7',
    400: '#a3a9a2',
    500: '#828881',
    600: '#5b615a',
    700: '#494e47',
    800: '#2b302a',
    900: '#091007',
  },

  gradient:{
   0: 'radial-gradient(circle, #546B50, #3F593A, #213D1A)', 
   1: 'radial-gradient(circle, #D7DBD6, #627660)', 
  },


};


 //Typography:
 //https://github.com/storybookjs/design-system/blob/master/src/components/Typography.stories.mdx
 // some standards from the web; also used within the casher-code:
 
 const sizeBase: number= 16;
 const pxInRemSize = (sizeInPx: number): string => `${sizeInPx / sizeBase}rem`;

 const typography: Typography = {
    type: {
      primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      regular: '400',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    size: {
      s1: pxInRemSize(12),
      s2: pxInRemSize(14),
      s3: pxInRemSize(16),
      m1: pxInRemSize(20),
      m2: pxInRemSize(24),
      m3: pxInRemSize(28),
      l1: pxInRemSize(32),
      l2: pxInRemSize(40),
      l3: pxInRemSize(48),
    },
  };

  
export const sampletext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

//not yet in use:
const breakpoints:  {[size: string]: number} ={medium: 600, large:950};

const mediaQueries = {
  medium: `@media screen and (min-width: ${breakpoints['medium']}px)`,
  large: `@media screen and (min-width: ${breakpoints['large']}px)`,
}




/*
* export the basics of the design-system:

*/

export const theme: DesignSystemBase = {
  coloring: colors,
  sizeBase: sizeBase,
  typo: typography,
  breakpoints: breakpoints,
  mediaQueries: mediaQueries,
};

export const theme2: DesignSystemBase = {
  coloring: autumn,
  sizeBase: sizeBase,
  typo: typography,
  breakpoints: breakpoints,
  mediaQueries: mediaQueries,
};












/*
* export map of keys wrt. color-theme
* 
*/
type ObjectKey = keyof typeof colors;
export const myVar0 = 'primary' as ObjectKey;
export const myVar1 = 'primarycomplement' as ObjectKey;

export type{ DesignSystemBase };


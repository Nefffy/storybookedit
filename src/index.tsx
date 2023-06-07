import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import App from './App';


/*
* Simple Mock Data
*
* types: are not extendable
* interfaces: are
* 
*/

export type Labeling = {
  id: string;
  name: string;
}

type Content = {
  text: string;
}

export type Category = Labeling & Content;


export type GeoData =  {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

export interface Data {
  cat:  Category [],
  reg: Labeling [],
}

export interface PropData {
  data: Data;
  header: string;
}

/*
* concrete data and usage:
*/

const mainHeader ="Wie geht es unseren Wäldern?";

/*
* nobody wants to change subtitles in each component via hand:
*/
const dataCategories: Category[]= [
  { id: "cat-0", name: "Mehr Wald, weil...", text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},
  { id: "cat-1", name: "Waldwächter", text:"Lorem ipsum..."},
  { id: "cat-2", name: "Waldelfen gesucht", text:"Lorem ipsum..."},
  { id: "cat-3", name: "Landschaften", text:"Lorem ipsum..."},
  { id: "cat-4", name: "Fakten (Check)", text:"Lorem ipsum..."},
];

export const dataRegional: Labeling[] = [
  { id: "lab-0", name: "Start:" },
  { id: "lab-1", name: "Radius (km):"},
];



/*
* 
* change the data for the overlay wrt. the user-settings
* initial data: all events
*
* updated data: all data wrt. the user setting
*
* dummy entries for testing:
* 
*/
export const DATA: Data ={
  cat: dataCategories,
  reg: dataRegional,
}


/*
* React components
* 
* Routing via react-router-dom
* BrowserRouter based on the browser's built in history stack:
* https://reactrouter.com/en/main/router-components/browser-router
*

 cf. next.js or other frameworks for React
*/



const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App data={DATA} header={mainHeader} />
    </BrowserRouter>
  </React.StrictMode>
);


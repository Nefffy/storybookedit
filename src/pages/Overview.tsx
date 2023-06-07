import React, { useState } from "react";
import Cats from "../stories/ui-components/composed/Cats";
import Regio from "../stories/ui-components/composed/Regio";
import {Category,GeoData,Labeling} from '../index';


// Some mock data:
// event-data isn't necessary at App.ts - level:
export const eventData: GeoData[]= [
  { id:0, name: "Event-NRW", lat: 50.4442032, lon:6.814773 }, //nrw
  { id:1, name: "Event-Schweiz", lat: 47.417928,  lon:9.364397 }, //schweiz ca. 650
  { id:2, name: "Event-Kamp-Lintfort", lat: 51.4957751, lon:6.5321277}, //Ka-Li
  { id:3, name: "Event-Düsseldorf", lat: 51.233193,  lon:6.814056 }, //Duesseldorf
  { id:4, name: "Event-Karpaten", lat: 47.239, lon:25.5908 }, //Karparten ca. 1800 km
]

/*
* This component includes the main and aside of
* the lecture-website-design
*
* cats and regio represent main and aside-component
*/

export default function Overview(props:{cats:Category[],  labels:Labeling[]}) {

    //propagate props down to the UI-components
    const catDATA = props.cats;
    

  // initial value for event - no filtering - pure data from server (here: mock data set)
  // initial value in props.data.events - use for reset and initial rendering:
  // this list will be updated in case a user uses the filter-button:
  const [eventList, setEvents] = useState<GeoData[]>(eventData);

  /*
  * the state wrt. eventList should be updated here and
  * not in the children of the App component.
  * no change of props wihtin a react-function
  * 
  * TODO: move this data into the child-component?
  * avoid to handle GeoData as prop
  * 
  * General chalenge with React:
  * 
  *   - what are my states?
  *   - which component should fetch/manage the data?
  */
  function filterEvents(update: GeoData[], reset:boolean) {
    //console.log("App: I am reseting the data!");
    if(!reset){
    setEvents(update);
    } else {
      setEvents(eventData);
    }
  }

    /*
    * in real application data would be fetched (useEffect) here
    * or
    * in the lowest component of the component-tree
    * and first necessary
    * 
    * to avoid prop-dropping
    */
   

    return (

    <div>
      <Cats cat={catDATA}/>   
      <Regio fields={props.labels} events={eventList} filter={filterEvents}/> 
    </div>
    );
  }
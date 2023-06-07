import { useRef, MouseEvent } from "react";
import RegioInput from "../basics/RegioInput";
import styled from "styled-components";
//types
import { GeoData, Labeling } from "../../../index";
// data set for the geo-filtering
import { eventData } from "../../../pages/Overview";

/*
 **********************************************************************************
 * styeld-components
 * 
 * TODO: intergrate the themes
 **********************************************************************************
 */

const Wrapper = styled.div`
  position: relative;
  display: block;
  align-items: center;
  margin: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #ffffff;
  color: #1a471c;
  background-image: radial-gradient(circle, #d7dbd6, #627660);
`;

const StyledDiv = styled.div`
  position: relative;
  display: block;
  width: 70%;
  text-align: center;
  align-items: center;
  font-size: 1em;
  font-weight: 200;
  font: Nunito Sans;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #e7e4eb;
  background-image: radial-gradient(circle, #546b50, #3f593a, #213d1a);
`;

const EventDiv = styled.div`
  position: relative;
  display: block;
  width: 70%;
  text-align: center;
  align-items: center;
  font-size: 1em;
  font-weight: 200;
  font: Nunito Sans;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #0d2d05;
  background-color: #dcd5e6;
`;

const StyledButton = styled.button`
  position: relative;
  display: block;
  width: 30%;
  text-align: center;
  align-items: center;
  font-size: 0.6em;
  font-weight: 100;
  font: Nunito Sans;
  cursor: pointer;
  border: none;
  margin: 0.3em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #e7e4eb;
  background-image: radial-gradient(circle, #546b50, #3f593a, #213d1a);
  &:hover {
    background-image: none !important;
    background-color: #dcd5e6;
    color: #1a471c;
  }
`;

const StyledButtonEvents = styled(StyledButton)`
  width: 78%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  font-size: 1em;
  font-weight: 200;
  border-radius: 0.5em;
`;
/*
 **********************************************************************************
 **********************************************************************************
 */

export default function Regio(props: {
  fields: Labeling[];
  events: GeoData[];
  filter: Function;
}) {

  /*
   * preparations for the overlay
   * useRef is a React Hook to mark values which should not be rendered
   */
  // This ref will be connected to the overlay div
  const overlayRef = useRef<HTMLInputElement>(null);

  

  /*
   * get the values from the input-fields directly?
   * or via useState?
   */
  const events = props.events;

  function filterEvents(e: MouseEvent<HTMLButtonElement>) {
    //e.preventDefault();

    // get the input of radius: if this is not a valid input, then radius= 0 and reset = true
    let radius = 0;
    let reset = false;
    const html = document.getElementById("lab-1");
    if (html) {
      radius = parseInt((html as HTMLInputElement).value);
      if (!isNaN(radius) && radius > 0) {
        reset = false;
      } else {
        radius = 0;
        reset = true; // reset to the initial dataset without any filtering
      }
    }


    //navigator.geolocation causes sometimes an user-unfriendly delay
    //For future add exercise: add loading bar in overlay or disable/enable Aktuelles Button
    if (navigator.geolocation) {
      // geo location flag
      var crd = { latitude: -1, longitude: -1 };
      navigator.geolocation.getCurrentPosition((pos) => {
        crd = pos.coords;

        // todo: more dynamic code wrt. to the starting position
        // we need a db wrt. to (town-names -> lat & lon)

        // we create a new array via the filter-method
        // based on the original data set:
        console.log("Start Computation");
        const eve = eventData.filter((item: { lat: number; lon: number; }) => {
          let ret = true;

          if (crd.latitude > -1 && crd.longitude > -1) {
            const val = applyHaversine(
              crd.latitude,
              crd.longitude,
              item.lat,
              item.lon
            );
            //console.log("Distance "+val);
            if (val > radius) ret = false;
          }
          return ret;
        });

        // function from parent-component up to App to update the props:
        // causes a rerendering
        props.filter(eve, reset);
      });
    } else {
      const html = document.getElementById("lab-0");
      if (html) {
        html.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
  }



  /*
  * The idea with overlayRef is based on the 
  * tutorial material of https://www.kindacode.com/
  *
  */

  // This function is called when the "Aktuelles" button gets clicked
  const openSearch = () => {
    if (overlayRef.current) {
      overlayRef.current.style.width = "100%";
    }
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    if (overlayRef.current) {
      overlayRef.current.style.width = "0%";
    }
  };

  const labelWithInput = props.fields.map((label) => (
    <RegioInput id={label.id} name={label.name} key={label.id}></RegioInput>
  ));

  /*
   *
   * event value as state wrt. user-interaction
   * useState-example
   *
   */
  const eves = events.map((event) => (
    <EventDiv id={"eve-" + event.id} key={event.id}>
      {event.name ? event.name : "No content."}
    </EventDiv>
  ));
  return (
    <aside>
      <Wrapper>
        <StyledDiv>Regional</StyledDiv>
        {labelWithInput}

        <StyledButton
          type="button"
          id="filter-but"
          // get the filtering for the event-view:
          onClick={filterEvents}
        >
          Filtern
        </StyledButton>

        <StyledButtonEvents // open the overlay:
          onClick={openSearch}
        >
          Aktuelles
        </StyledButtonEvents>
      </Wrapper>

      <div ref={overlayRef} className="overlay">
        <button onClick={closeSearch}>&times;</button>
        {eves}
      </div>
    </aside>
  );
}



/*
 * GEO Filtering
 * Helper function based on the Haversine formula
 * and explanation on
 * https://www.vcalc.com/wiki/vCalc/Haversine+-+Distance
 */
function applyHaversine(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371e3; // metres
  const phi1 = (lat1 * Math.PI) / 180; // in radians
  const phi2 = (lat2 * Math.PI) / 180;
  const delta_phi = ((lat2 - lat1) * Math.PI) / 180;
  const delta_lambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(delta_phi / 2) * Math.sin(delta_phi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(delta_lambda/ 2) * Math.sin(delta_lambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres
  return d / 1000; //return in km
}

import styled from "styled-components";

import {
  theme as theme1,
  //theme2,
} from "../../themes/theme_V1";
/*
 * This basic component returns a simple div to provide
 * a consitent design-element for the category-buttons.
 *
 * Or other buttons such as "Aktuelles"
 *
 */

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   * based on this value: color and bg are assigned
   */
  primary: boolean;

  /**
   * How large should the button be?
   * styles are derived based on the current value and theme
   */
  size: "tiny" | "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   *
   */
  onClick: (id: string) => void;
  /**
   * id based on mock data set
   */
  cat: string;
}

/*CSS
 * styled-components:
 *
 *  work with some key-words as primary or size to
 *  style the button based on the current theme (ThemeProvider)
 *
 *  Check out: css
 *   font-family: ${(props) => props.theme.typo.primary};
 */

const ButtonNav = styled.div<{ settings: ButtonProps }>`
  position: relative;
  display: flex;
  width:70%;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.typo.primary};
  font-size: ${({ settings }) =>
  settings.size === "large" ? '1.4em' :'1.0em' };
  font-weight: ${({ settings }) =>
  settings.size === "large" ? 800:400 };
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  overflow:hidden;
  color: ${(props) =>
    props.settings.primary
      ? props.theme.coloring.primarycomplement[100]
      : props.theme.coloring.dark[800]};
  background-color: ${(props) =>
    props.settings.primary
      ? props.theme.coloring.primary[900]
      : props.theme.coloring.primarycomplement[50]};
  &:hover {
    background-color: ${(props) =>
      props.settings.primary
        ? props.theme.coloring.primary[100]
        : props.theme.coloring.primarycomplement[100]};
    color: ${(props) =>
      props.settings.primary
        ? props.theme.coloring.primarycomplement[100]
        : props.theme.coloring.primarycomplement[700]};
    padding: 0.6em 1.1em;
    background-image: ${(props) =>
      props.settings.primary ? props.theme.coloring.gradient[0] : ""};
  }
`;

/*
* reuse css-code to create a slighlty different component:
*/
export const ButtonTiny = styled(ButtonNav)`
  width:10%;
  font-size: 0.6em;
  font-weight: 200;
  margin-left: 0.4em;
  padding: 0.5em 0.5em;
`;

// Set default props for Storybook
// doesn't cause any problems with app-version
// TODO: integrate ThemeProvider
ButtonNav.defaultProps = {
  theme: theme1,
};

ButtonTiny.defaultProps = {
  theme: theme1,
};


/**
 * Primary UI component for user interaction
 * 
 * NOTE: at the moment these components and stories are implemented for mobile-first. An update working with media queries will follow as soon as possible.
 *       
 *
 * Description: We need a wrapper-button as interface for the parent components
 * 
 * This component has four possible states.

    - [Primary](#primary): frequently used style
    - [Secondary](#secondary): style for specific buttons e.g. user changes displayed content based on action onClick;
*     in our lecture example: Filter-Button wrt. geolocation
    - [Large](#large): for highlighting an available user-interaction
    - [Tiny](#tiny): for small buttons e.g. back-button
 * 
 * 
 * 
 *
 * For App-Development: the props should be set based on the active/global theme set in 
 *  a higher component wrt. the tree-hierarchy 
 * 
 * @storybook: theme not defined!!!
 */
export const Button = ({ ...props }: ButtonProps) => {

  if (props.size !== "tiny") {
    return (

      <ButtonNav
        id={props.cat}
        settings={props}
        //event on click:navigation
        onClick={() => props.onClick(props.cat)}
      >
        {props.label ? props.label : "nameless"}
      </ButtonNav>
    );}
    return (
      <ButtonTiny
        id={props.cat}
        settings={props}
        //event on click:navigation
        onClick={() => props.onClick(props.cat)}
      >
        {props.label ? props.label : "nameless"}
      </ButtonTiny>
    );
};

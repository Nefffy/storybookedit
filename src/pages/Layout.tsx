import { Outlet, Link } from "react-router-dom";

import styled from "styled-components";

const ButtonTheme = styled.div<{ primary: Boolean }>`
  display: flex;
  width: 10%;
  opacity: 10%;
  font-size: 0.6em;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  margin-left: 0.4em;
  border-radius: 0.5em;
  padding: 0.2em 0.2em;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary
      ? props.theme.coloring.primary[100]
      : props.theme.coloring.primarycomplement[100]};
  &:hover {
    opacity: 100%;
  }
`;

/*CSS
 * styled-components:
 * without themes
 *
 * TODO: responsive design with tailwind
 * https://tailwindcss.com/docs/responsive-design
 */

// styling is hardcoded:
const StyledLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 0.7em;
  font-family: "Nunito Sans", "Helvetica Neue", "Helvetica", "Arial",
    "sans-serif";
  margin: 0.05em;
  padding: 0.5em;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #5c9768;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  font-family: "Nunito Sans", "Helvetica Neue", "Helvetica", "Arial",
    "sans-serif";
  height: 100%;
  padding: 0.5em;
  color: #ffffff;
  background-image: radial-gradient(circle, #546b50, #3f593a, #213d1a);
`;

const Layout = (props: { header: string, ts: Function}) => {
  return (
    <Wrapper>
      <header>
        <ButtonTheme key="theme" primary={true}
        onClick={ () => props.ts() }
        >
          ts
        </ButtonTheme>
        <h1>
          <StyledLink to="/overview">{props.header}</StyledLink>
        </h1>
      </header>

      {/* See https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx:
          An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

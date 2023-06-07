import styled from "styled-components";

/*
 * properties for the regio-component:
 *
 * id
 * name
 * event-reaction
 *
 * TODO: add different stories
 * TODO: onChange for re-do of the filtering or input-validation
 */

const StyledInput = styled.input`
  position: relative;
  display: flex;
  width:70%;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size:1.0em;
  font-weight: 400;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5em;
  border:none;
  color: #ffffff;
  background-color: #e7e4eb;
  &:hover {
    background-color:#dcd5e6;
    color: #1a471c;
  };
  &:focus {
    outline: none;
  }
`;





export default function RegioInput(props: { id: string; name: string }) {

  return (
    <div>
      <label>{props.name}</label>
      <StyledInput id={props.id} type="text" />
      <br></br>  
    </div>
  );
}

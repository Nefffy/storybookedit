
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {Button} from '../basics/Button';
import {Category} from '../../../index';


/*CSS
* styled-components:
*/

const Wrapper = styled.div`
  position: relative;
  display: block;
  margin: auto;
  align-items: center;
  margin: 1em;
  padding: 0.5em ;
  border-radius: 0.4em;
  background-color: #e7e4eb;
  overflow:hidden;
`;

/*
* This component returns a div-list 
* For each category one div-button, which enables the navigation 
* to a Content-Page
*
* Main (navigation-Bar and main-contend) respresented as component
*/

export default function Cat( props: {cat:Category[]} ) {

  const navigate = useNavigate();

  //each element wrt a category will use this function to set the corresponding navigation:
  const navigateOnClick= (param: string) =>{
    navigate(`/content/${param}`);
  };

  const cats = props.cat.map((cat: Category) => (
    // Each child in a list should have a unique key-prop:
    // The Button-component expects the following props cf. ButtonProps in Button.tsx
    <Button key={cat.id} primary={true} size="medium" label={cat.name} cat={cat.id}  onClick={navigateOnClick}></Button>  
  ));
    return (
      //main-tag of overview page:
        <main>
          <Wrapper>
            {cats}
          </Wrapper>
        </main>
    );
  }
  
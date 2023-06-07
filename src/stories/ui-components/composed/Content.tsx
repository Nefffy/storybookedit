import styled from 'styled-components';

import { Button } from '../basics/Button';
import Info       from "../basics/Information";
import { Category } from '../../../index';

import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

// styled html-component for an article-object
const StyledArticle = styled.article`
  position: relative;
  display: block;
  align-items: center;
  margin: 0.1em;
  padding: 0.8em ;
  border-radius: 0.5em;
`;


/* wrapper for the article-component
*  based on the routing-parameters the article selected by the user is forwarded to be rendered
*  
* Content is a page-component based on a header and Infotext-area
* This page-component is filtering the correct data based on the routing-params
**/
export default function Content(props:{data:Category []}) {
    const params= useParams();
    const navigate = useNavigate();
    // data by props: otherwise server-request
    // extract the selected article by the user
    // and forward the data to the underlying component via props:
    const content = props.data.filter(item => item.id === params.id);
    // React docu: null?
    const value = content[0].name;
    // id to get the right content?
    return (
    <>
        {value && <StyledArticle>
                    <h2>{content[0].name}</h2>
                    <Button key={params.id} primary={false} size="tiny" label="back" cat="back"  onClick={ () => navigate(-1)}></Button>  
                  
                    <Info text={content[0].text}></Info>
                </StyledArticle>  
        } 
    </>
    );
  }
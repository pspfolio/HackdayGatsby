import styled from 'styled-components';

const PostHeader = styled.h1`
    font-size: 64px;
    color: ${ props => props.theme.text.main};
    font-family: 'Abril Fatface'; 
    font-weight: normal;
    margin-top: 3rem;
`

export default PostHeader;
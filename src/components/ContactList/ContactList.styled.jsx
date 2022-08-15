import styled from 'styled-components';

export const ContactListContainer = styled.ul`
width: 350px;
margin: 0 auto;
`;

export const ContactListItem = styled.li`
height: 30px;
padding: 0 5px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;
&:first-child {
    border-top: 1px solid black;
}
`;

export const DeleteButton = styled.button`
padding: 3px 7px;
background-color: #f334347c;
border-radius: 5px;

:hover, :focus {
    background-color: #f33434;
}
`;
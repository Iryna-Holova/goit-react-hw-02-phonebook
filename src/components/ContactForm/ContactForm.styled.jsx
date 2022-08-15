import styled from 'styled-components';

export const Form = styled.form`
width: 350px;
margin: 0 auto 20px auto;
box-sizing: border-box;
padding: 20px 60px;
border: 1px solid #ffffff;
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
`;

export const Input = styled.input`
background-color: transparent;
border: none;
height: 25px;
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 5px;
background-color: #ffffff7f;
border-radius: 5px;
text-align: center;
text-transform: capitalize;
font-weight: bold;

:hover, :focus {
    background-color: #ffffff;
}
`;
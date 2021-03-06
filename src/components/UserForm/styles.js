import styled from 'styled-components';

export const Form = styled.form`
    padding: 16px 20px;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;

    &[disabled] {
        opacity: 0.3;
    }
`

export const Title =styled.h2`
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0px;
    text-align: center;
`

export const Error = styled.span`
    color: red;
    font-size: 14px;
    padding: 0px 20px;
`
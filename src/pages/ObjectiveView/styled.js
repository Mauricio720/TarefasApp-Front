import styled from 'styled-components';

export const PageArea=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    h2{
        width:80%;
        text-align:center;
        color:#006a9c;
        border-bottom:2px solid #006a9c;
    }

   
    .objective__btnAdd{
        width:150px;
        height:40px;
        line-height:40px;
        margin-bottom:15px;
        background-color:#006a9c;
        color:white;
        cursor: pointer;
        text-align:center;
        position:fixed;
        bottom:0px;

        &:hover{
            background-color:blue;
        }
    }

`

export const Loading=styled.div`
     display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
`
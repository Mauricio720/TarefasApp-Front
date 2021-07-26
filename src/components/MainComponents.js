import styled from 'styled-components';

export const Template=styled.div`
    display:flex;
`;


export const PageContainer=styled.div`
    width:100%;
    height:100vh;
    overflow-y:auto;

    .menuMobile{
        display: none;
        width: 40px;
        height: 40px;
        flex-direction: column;
        position: absolute;
        padding: 5px;
        
        .menuMobile__line{
            width: 100%;
            height: 4px;
            background-color: #006a9c;
            margin: 4px;
        }
    }

    @media (max-width:1090px){
        .menuMobile{
            display: flex;
        }
    }
`;
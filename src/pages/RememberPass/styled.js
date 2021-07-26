import styled from 'styled-components';

export const PageArea=styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#006a9c;
    overflow-y: hidden;

    h1{
        width: 60%;
        color:#006a9c;
        border-bottom: 1px solid white;
        text-align: center;
        background-color: white;
    }
    
    .containerRememberPass{
        width: 50%;
        height: 70%;
        border: 2px solid #006a9c;
        border-radius: 25px;
        background-color: white;

        h2{
            margin: 0px;
            color:#006a9c;
            text-align:center ;
            margin-top: 50px;
        }

        .formRememberPass{
            width: 100%;
            height: 100%;
            margin-top: 50px;
            display: flex;
            align-items: center;
            flex-direction: column;

            .input__group{
                width: 60%;
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 5px;
                
                label{
                    color:#006a9c;
                    text-align: center;
                }
                
                input,select,textarea{
                    width: 100%;
                    height: 40px;
                    font-size: 18px;
                    color: #006a9c;
                    border:1px solid #006a9c;
                    background-color: white;
                }
            
                .btnSubmit{
                    width:50%;
                    height:40px;
                    font-size:20px;
                    border-radius:0px;
                    background-color:#006a9c;
                    color:white;
                    cursor: pointer;
                    font-size:15px;
                    padding:0px;
                    margin-top: 25px;

                    &:hover{
                        color:white;
                        background-color:#006a9c;
                        border:1px solid white;
                    }
                }
            }
            
        }
    }

    @media (min-width:400px) and (max-width:900px){
        .containerRememberPass{
            width: 90%;
            padding: 15px;
        }
    }

    @media (max-width:400px){
        h1{
            width: 95%;
        }

        .containerRememberPass{
            width: 90%;
            padding: 15px;
        }

        .containerRememberPass .formRememberPass .input__group{
            width: 100%;
        }
    }   
`
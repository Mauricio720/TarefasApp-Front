import styled from 'styled-components';

export const PageArea=styled.div`
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #006a9c;

    .blockInfo{
        width: 70%;
        border: 2px solid #006a9c;
        border-radius: 15px;
        padding: 15px;

        .blockInfo__block{
            width: 100%;
            min-height: 80px;
            border: 2px solid #006a9c;
            border-radius: 15px;
            margin-bottom: 15px;
            
             h3{
                padding: 0px;
                margin: 5px;
                width: 100%;
                color: #006a9c;;
                text-align: center;
            }

            .blockInfo__content{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 5px;
                padding: 15px;

                a{
                    color: #006a9c;;
                }

                .blockInfo__info{
                    display: flex;
                    justify-content: center;
                    font-size: 18px;
                    width: 70%;
                    color: #006a9c;;
                    border-bottom: 2px solid #006a9c;
                    
                    .blockInfo__item{
                        margin: 5px;
                    }

                    .blockInfo__item--lbl{
                        font-weight: bold;
                    }
                
                }
            }
        }
    }

    @media (max-width:869px){
        
        .blockInfo{
            width: 85%;
            margin-top: 180px;
        }

        .blockInfo__content .blockInfo__info {
            width: 100% !important;
            flex-direction: column;
            
        }

        .blockInfo__item{
            width: 100%;
            flex: 1;
            text-align: center;
            word-break: break-word;
            font-size: 15px;
        }
    }
` 
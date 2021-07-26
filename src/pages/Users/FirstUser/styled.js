import styled from 'styled-components';

export const PageArea=styled.div`
    background-color:#006a9c;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    
    .registerUser__container{
        width:850px;
        height:550px;
        border:2px solid #006a9c;
        display:flex;
        align-items:center;
        flex-direction:column;
        background-color:white;
        position:relative;


        .backButton{
            width:75px;
            height:40px;
            line-height:40px;
            background-color:#006a9c;
            color:white;
            border:1px solid #006a9c;
            cursor: pointer;
            position:absolute;
            top:5px;
            left:0px;
            margin:5px;
            text-align:center;
            border-radius:10px;

            &:hover{
                background-color:white;
                border:1px solid #006a9c;
                color:#006a9c;
            }
        }

        h2{
            width:70%;
            text-align:center;
            color:#006a9c;
            border-bottom:2px solid #006a9c;
        }

        form{
            width:95%;
            margin-top:15px;
            color:#006a9c;

            .input__group{
                width:100%;

                label{
                    color:#006a9c;
                }

                input{
                    width:100%;
                    height:30px;
                    border:1px solid #006a9c;
                }
            }

            .registerUser__content{
                display:flex;
                
                .registerUser__leftSide,.registerUser__rightSide{
                    display:flex;
                    flex:1;
                    flex-direction:column;
                    margin-left:10px;
                    margin-right:10px;
                }

                .registerUser__rightSide--maxHeight{
                    max-height:150px;
                }

                .registerUser__rightSide{
                    align-items:center;
                    justify-content: flex-end;
                    

                    .registerUser__profilePicture{
                        width:150px;
                        height:150px;
                        cursor: pointer;
                        
                        img{
                            width:100%;
                        }
                    }
                }
            }

            .registerUser__footer{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-top:30px;
                
                .btnSubmit{
                    width:40%;
                    height:40px;
                    font-size:20px;
                    border-radius:0px;
                    background-color:#006a9c;
                    color:white;
                    cursor: pointer;
                    font-size:15px;
                    padding:0px;
                    &:hover{
                        color:white;
                        background-color:#006a9c;
                        border:1px solid white;
                    }
                }
            }
        }
    }

    @media (max-width:500px){
        .registerUser__container{
            height: auto;
            padding-bottom: 15px;
        }

        .registerUser__container form .registerUser__content{
            flex-direction: column !important;
        }

        .firstBlock .registerUser__leftSide{
            order: 1 ;
        }

        .firstBlock .registerUser__rightSide{
            order: 0 ;
        }

        h2{
            margin-top: 150px;
        }

        .backButton{
            display: none;
        }
    }

`
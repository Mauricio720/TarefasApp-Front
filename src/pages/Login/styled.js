import styled from 'styled-components';

export const PageArea=styled.div`
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#006a9c;
    overflow: hidden;

    .login__container{
        width:450px;
        height:550px;
        border:2px solid #006a9c;
        display:flex;
        align-items:center;
        flex-direction:column;
        background-color:white;
       

        .login__logoContainer{
            width:100%;
            height:130px;
            display:flex;
            align-items:center;
            justify-content:center;

            img{
                width:30%;
            }
        }

        .login__content{
            width:95%;
            height:300px;
            background-color:#006a9c;
            border-radius:15px;
            display:flex;
            align-items:center;
            flex-direction:column;

            h1,h2{
                color:white;
                padding:0px;
                margin:0px;
                color:white;
                text-align:center;
            }

            h2{
                display: none;
            }

            form{
                margin-top:25px;
                width:85%;

                .input_group{
                    width:100%;
                    height:60px;
                    display:flex;
                    align-items:center;


                    .input_group__icon{
                        width:50px;
                        height:50px;
                        margin-right:15px;

                        img{
                            width:100%;
                        }
                    }

                    input{
                        height:30px;
                        width:270px;
                        border-radius:15px;
                        font-size:18px;
                        padding-left:15px;
                    }

                    .btnSubmit{
                        width:100px;
                        border-radius:0px;
                        background-color:white;
                        color:#006a9c;
                        cursor: pointer;
                        font-size:15px;
                        padding:0px;
                        &:hover{
                            color:white;
                            background-color:#006a9c;
                            border:1px solid white;
                        }
                    }

                    div{
                        color:white;
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline; 
                        }
                    }
                }

                .input_group--footer{
                    margin-top:5px;
                    display:flex;
                    justify-content:space-between;
                }
            }
        }

        .login__registers{
            margin-top:25px;
            width:95%;
            height:40px;
            display:flex;

            .registers__item{
                flex:1;
                background-color:white;
                margin:2px;
                display:flex;
                color:#006a9c;
                line-height:30px;
                cursor: pointer;

                .registers__icon{
                    width:30px;
                    height:30px;
                    margin-right:10px;

                    img{
                        width:100%;
                    }
                }

                &:hover{
                    text-decoration: underline; 
                }
            }
        }
        
        .register__btn{
            margin-top:15px;
            color:white;
            padding:2px;
            padding-left:15px;
            padding-right:15px;
            background-color:#006a9c;
            
            &:hover{
                background-color:white;
                color:#006a9c;
                border:1px solid #006a9c; 
            }
        }
    }

    h2{
        width:100%;
        text-align:center;
        color:#006a9c;
        border-bottom:2px solid #006a9c;
        margin-top: 25px;
    }

    .form_forgotPassword{
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:5px;
        

        .input__group{
            width:100%;
            display: flex;
            justify-content: center;
            
            input{
                width:90%;
                height:30px;
                border:2px solid #006a9c;
                text-align: center;
            }
        }

        .btnSubmitForgotPass{
            margin-top: 25px;
            width:120px !important;
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

    @media (max-width:450px){
        h1{
            display: none;
        }

        h2{
            display: block !important ;
        }

        .login__content{
            height: 95vh;
        }
        
        .login__container{
            width: 100%;
            height: 90%;
            padding-bottom: 15px;
        }

        .input_group{
            flex-direction: column;
        }

        .input_group .input_group__icon{
            width: 30px !important;
            height: 30px !important;
            margin-right: 0px !important;
            padding:5px
        }
        

        .login__registers{
            margin-top: 50px !important;
        }

        .login__container .login__registers{
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

        .login__container .login__registers .registers__item {
            margin: 10px;
        }

        .register__btn{
            margin-top: 50px !important;
            height: 40px;
            line-height: 40px;
        }

        .input_group--footer{
            margin-top: 15px !important;
        }

        .input_group input[type=text],input[type=password]{
            width: 90% !important;
        }

        .form_forgotPassword{
            width: auto;
            padding: 30px;
        }

        .form_forgotPassword .input__group input{
            width: 100% !important;
        }

        h2{
            margin-top: 50px;
            font-size: 20px;
        }
    }
`

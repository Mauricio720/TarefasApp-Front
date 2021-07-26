import styled from 'styled-components';

export const BigCardContainer=styled.div`
    position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color:rgba(2, 2, 2, 0.5);
	display:flex;
    justify-content: center;
	align-items: center;
	transition: all ease .5s;
	overflow-y: auto;
    z-index:1000;

    .disabled{
        background: #c7c7c7;
        cursor: default !important;
    }


    .bigCard{
        width:450px;
        height:600px;
        border:2px solid #006a9c;
        background-color:white;
        position:relative;
        
        input{
            border:none;
        }

        textarea,select{
            border:2px solid #006a9c;
        }
       
        .bigCard__close{
            position: absolute;
            color:#006a9c;
            top:0px;
            right:5px;
            font-size:25px;
            cursor: pointer;
        }

        .bigCard__header{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            margin-top: 10px;
            
            .bigCard__image{
                width:120px;
                height:120px;
                
                img{
                    width:100%;
                    height: 100%;
                }
            }
            
            .bigCard__title,.bigCard__title{
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                border:none;
                border-bottom:1px solid #006a9c;
                color:#006a9c;
                text-align:center;
                font-weight: bold;
                width: 80%;
                font-size: 20px;

                input{
                    width: 100%;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;

                }
            }
         }
        
         .bigCard__contentContainer{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;

            font-weight:bold;

            .bigCard__content{
                width:85%;
                margin-top:15px;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
            }
            
            .bigCard__item{
                width:100%;
                padding:8px;
                display:flex;
                
                label{
                    width:200px;
                    font-size:16px;
                    color:#006a9c;
                }

                .item__content{
                    width:300px;
                    border-bottom:2px solid #006a9c;
                    color:#006a9c;
                    font-size:16px;
                }
            }

            .bigCard__item--description{
                flex-direction:column;
                align-items:center;
                
                label{
                    text-align:center;
                }
            }
            

            .item__content--description{
                width:80%;
                min-height:60px;
                border:2px solid #006a9c;
                word-break: break-word;

            }
        }

        .bigCard__footer{
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:25px;

            .bigCard__footerContent{
                width:60%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                
                .bigCard__btn{
                    width:35px;
                    height:35px;
                    cursor: pointer;

                    img{
                        width:100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    @media (max-width:470px){
        .bigCard{
            width: 85%;
            height: auto;
            padding: 15px;
        }

        .bigCard .bigCard__contentContainer{
            width: 100%;
        }

        .bigCard .bigCard__contentContainer .bigCard__content {
            width: 100%;
        }

        .bigCard__item{
            flex-direction: column;
        }

        .bigCard .bigCard__contentContainer .bigCard__item .item__content{
            width: 100%;
        }

        .bigCard .bigCard__footer .bigCard__footerContent{
            width: 100%;
        }

        .bigCard .bigCard__close {
            top: 15px;
        }
    }
`


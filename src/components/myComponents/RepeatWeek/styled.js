import styled from 'styled-components';

export const RepetitionDaysContainer=styled.div`
     width:400px;
    display:flex;
    flex-direction:column;

    .repetition__title{
        display:flex;
        justify-content:center;
        margin-bottom:15px;

        h3{
            width:250px;
            color:#006a9c;
            font-weight:bold;
            text-align:center;
        }
    }

    .repetition__container{
        display:flex;
        justify-content:center;

        .repetition__content{
            display:flex;
            flex-direction:column;
            width:90%;

            .repetition__item{
                display:flex;
                
                .repetition__itemCheck{
                    width:25px;
                    height:25px;
                    margin-right:15px;
                    
                    img{
                        width:100%;
                    }
                }

                .repetition__itemText{
                    color:#006a9c;
                    font-size:16px;
                    font-weight:bold;
                }
            }
        }
    }

    .repetition__footer{
        display:flex;
        justify-content:center;

        .repetition__btn{
            width:120px;
            height:30px;
            background-color:#006a9c;
            color:white;
            text-align:center;
            cursor: pointer;;
            margin:5px;
            border-radius:10px;
        }
    }

    @media(max-width:450px){
        width: 90vw;
        height: 80% !important;
        
    }

`
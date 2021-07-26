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

    .conquest_content{
        margin-top:15px;
        width:90%;
        display:flex;
        justify-content:center;
        flex-wrap:wrap;

        .conquest{
            width:125px;
            display:flex;
            flex-direction:column;
            align-items:center;
            border:2px solid #006a9c;
            overflow:hidden;
            padding:5px;
            border-radius:5px;
            margin:5px;

            .conquest__img{
                width:80px;
                height:80px;

                img{
                    width:100%;
                }
            }

            .conquest__description{
                margin-top:10px;
                background-color:#006a9c;
                color:white;
                height:15px;
                line-height:15px;
                width:100%;
                text-align:center;
                padding:5px;
            }

            .conquest__value{
                font-size:25px;
                text-align:center;
                color:#006a9c;
                font-weight:bold;
            }
        }
    }
`
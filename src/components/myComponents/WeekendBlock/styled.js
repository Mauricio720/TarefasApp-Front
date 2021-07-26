import styled from 'styled-components';

export const WeekendContainer=styled.div`
    width:${props=>props.width+"px" || ""};
    min-height:60px;
    border:2px solid #006a9c;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top:15px;
    margin-bottom:15px;
    flex-wrap: wrap;

    .weekend__item{
        height:40px;
        width: 100px;
        background-color:#006a9c;
        color:white;
        text-align:center;
        margin:5px;
        line-height:40px;
        cursor: pointer;

        &:hover{
            background-color:blue;
            color:white;
        }
    }

    .week__selected{
        background-color:blue;
        color:white;
    }
`
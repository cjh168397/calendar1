import { createTrs } from "../utils";
import { MONTHS } from "./conifg";

const domPoll =  {
    ctroArea : null,
    MonthNode: null
}
export function createMonthControlArea(year){

    if(!domPoll.ctroArea){
        domPoll.ctroArea= document.createElement('div');
        domPoll.ctroArea.className = 'month-control-area';
        domPoll.ctroArea.innerHTML = `
        <span class="month-control-btn btn-month-lt">&lt;&lt;</span>
        <span class="control-show">
        <span class="control-title ">
        <span class="title-year">${year} </span>
        </span>
        </span>
        <span class="month-control-btn btn-month-gt">&gt;&gt;</span>
        `
       }else{
        domPoll.ctroArea.querySelector('.title-year').innerText = year;
       }
       return domPoll.ctroArea;
}
export function createMonthNode(month){
    if(!domPoll.MonthNode){
        domPoll.MonthNode = createTrs(4);
        let index = 0;

        domPoll.MonthNode.forEach(tr => {
            for(let i = 0;i<3;i++){
                const oTd = document.createElement('td');
                oTd.className = 'static-month'
                oTd.setAttribute('data-month',index+1);

                if(index + 1 ==month){
                    oTd.className += ' current';
                }

                oTd.innerText= MONTHS[index ++];


                tr.appendChild(oTd);
            }
            
        });
    }
    return domPoll.MonthNode;
}
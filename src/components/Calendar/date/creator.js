import { WEEK_DAYS } from "./config";
import { getFormatDate, getLastMonthRestDays, getMonthDatCount, getNextMonthRestDays } from "./utils";
import { createTrs , getDateInfo} from "../utils";
import './index.scss'

const domPoll = {
     weekDay : null,
     controArea : null
}

export function createWeekDayNode () {
    if(!domPoll.weekDay){
       domPoll.weekDay = document.createElement('tr');
        domPoll.weekDay.className = 'week-day';
    
        WEEK_DAYS.map(item => {
           
            domPoll.weekDay.innerHTML +=`<th>${item}</th>`
        
        });
    }
   
   
    
    return domPoll.weekDay;
}

export function createDateNode(year, month) {
    const lastMonthRestDays =  getLastMonthRestDays(year,month);
    const currentMonthDayCount = getMonthDatCount(year,month);
    const nextMonthRestDays = getNextMonthRestDays(year, month);
    const dateTrArr = createTrs(6);
    const currentDayCountID = createCurrentDaysTD(currentMonthDayCount,year,month);
    const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays);
    const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays);
   
    const tdArr = [
        ...lastMonthRestDaysTD,
        ...currentDayCountID,
        ...nextMonthRestDaysTD
    ];
    let index = 0;
    dateTrArr.forEach(tr => {
        for(var i=0; i<7 && tdArr[index]; i ++){
            tr.appendChild(tdArr[index ++]);
           
        }
    });
    return dateTrArr;
}

export  function createRestDaysTD(restDays) {
    return restDays.map(item => {
        const oTd = document.createElement('td');
        oTd.className = 'day rest-day';
        oTd.innerHTML = item;

        return oTd;
    })
}

export function createCurrentDaysTD (currentDayCountID,year,month) {
    let tdArr = [];
    const [
        currentYear,
        currentMonth,
        currentDate
    ] = getDateInfo();

    for (let i = 1; i<= currentDayCountID; i++){
        const oTd = document.createElement('td');
            oTd.className = 'day current-day';
        if(currentYear ===year && currentMonth === month && currentDate ===i){
            oTd.className +=' current';
        }else{
           
        }
        oTd.innerHTML = i ;
        oTd.setAttribute('data-date',getFormatDate(year,month,i))
        tdArr.push(oTd);
    }
    return tdArr;
}

export function createControlArea(year,month) {
    if(!domPoll.controArea){
        domPoll.controArea = document.createElement('div');
        domPoll.controArea.className = 'control-area'; 
    
        domPoll.controArea.innerHTML = `
        <span class="control-btn btn-year-lt">&lt;&lt;</span>
        <span class="control-btn btn-month-lt">&lt;</span>
        <span class="control-show">
        <span class="control-title ">
        <span class="title-year">${year}</span>年
        </span>
        <span class="control-title">
        <span class="title-month">${month}</span>月
        </span>
        </span>
        <span class="control-btn btn-month-gt">&gt;</span>
        <span class="control-btn btn-year-gt">&gt;&gt;</span>
    
        `;
    }else{
        domPoll.controArea.querySelector('.title-year').innerText 
        = year;
        domPoll.controArea.querySelector('.title-month').innerText = month;
    }
   
    return  domPoll.controArea;
}
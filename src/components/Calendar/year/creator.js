import { createTrs, getDateInfo } from '../utils';
import './index.scss'
import {createDecadeYears,getStartAndEndYear} 
from './utils'
const domPool = {
    ctroArea: null
}

export function createYearControlArea(year){
    const [startYear,endYear] = getStartAndEndYear(year);

    if(!domPool.ctroArea){
        domPool.ctroArea= document.createElement('div');
        domPool.ctroArea.className = 'year-control-area';
        domPool.ctroArea.innerHTML = `
        <span class="year-control-btn btn-year-lt">&lt;&lt;</span>
        <span class="control-show">
        <span class="control-title ">
        <span class="start-year">${startYear}</span>
        -
        <span class="end-year">${endYear}</span>
        </span>
        </span>
        <span class="year-control-btn btn-year-gt">&gt;&gt;</span>
        `
       }else{
        domPool.ctroArea.querySelector('.start-year').innerText = startYear;
        domPool.ctroArea.querySelector('.end-year').innerText = endYear;
       }
       return domPool.ctroArea;
}
export function createYearTD(year) {
    const decadeYearArr = createDecadeYears(year);
    const [currentYear ]= getDateInfo();
    const tdArr = [];
    decadeYearArr.forEach(year =>{
        const oTd = document.createElement('td');
        oTd.className = 'year decade-year';
        if(year ===currentYear){
            oTd.className+=' current'
        }
        oTd.innerText = year;
        oTd.setAttribute('data-year',year);
        tdArr.push(oTd);
    }) ;
    return tdArr;   
}
export function createYearNode(year){
    const yearTrArr = createTrs(3);
    const yearTds = createYearTD(year);

     let index = 0;
     yearTrArr.forEach(tr =>{
        for(let i =0 ; i<4&&yearTds[index]; i++){
            tr.appendChild(yearTds[index ++]); 
        }
     })
     return yearTrArr;
}
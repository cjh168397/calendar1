import { createControlArea } from "../date/creator";
import { createTable } from '../creater';

import {
 createYearControlArea,
createYearNode
} from "./creator";
import {
    getStartAndEndYear
}from './utils';
import '../index';
export function render(container,year){
    container.innerHTML='';
    const oTable = createTable('my-year-calendar-table')
    // oTable.className = 'my-year-calendar-table';

    const contorlArea= createYearControlArea(year);
    const yearNode = createYearNode(year);

    yearNode.forEach(tr =>{
        oTable.appendChild(tr);
    });

    container.appendChild(contorlArea);
    container.appendChild(oTable);
    
}
 export function update(year){

    const oTable = document.querySelector('.my-year-calendar-table');
    const oStartYear = document.querySelector('.start-year');
    const oEndYear = document.querySelector('.end-year');

    const yearNode = createYearNode(year);
    const [StartYear,EndYear] = getStartAndEndYear(year);

    oStartYear.innerText = StartYear;
    oEndYear.innerText = EndYear;

    oTable.innerHTML = ''
    yearNode.forEach(tr => {
        oTable.appendChild(tr);
    });
}
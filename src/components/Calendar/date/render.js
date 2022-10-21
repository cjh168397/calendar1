import { createTable } from '../creater';
import {
    createWeekDayNode,
    createDateNode,
    createControlArea
} from './creator';

export function render(container,year,month) {
    container.innerHTML = '';
    const oTable = createTable( 'my-calendar-table')
    const oTHead = document.createElement('thead');
    const oTBody = document.createElement('tbody');
    const weekDayNode = createWeekDayNode();
    oTBody.className = 'my-calendar-body';
    oTable.className = 'my-calendar-table';


    const dateTrs = createDateNode(year, month);
    const controlArea = createControlArea(year, month);
    oTHead.appendChild(weekDayNode);

    dateTrs.forEach(tr => {
        oTBody.appendChild(tr);
    })
    oTable.appendChild(oTHead);
    oTable.appendChild(oTBody);
    container.appendChild(controlArea);
    container.appendChild(oTable);
    // const obj = createDateNode(year,month);
    // console.log(obj)
    
}
export function update(year, month) {
    const oTBody = document.querySelector('.my-calendar-body');
    const oTitleYear = document.querySelector('.title-year');
    const oTitleMonth = document.querySelector('.title-month');
    const dateTrs = createDateNode(year, month);
    oTBody.innerHTML = '';
    console.log('guo')
    oTitleYear.innerHTML = year;
    oTitleMonth.innerHTML = month;
    dateTrs.forEach(tr => {
        oTBody.appendChild(tr);
    })
}
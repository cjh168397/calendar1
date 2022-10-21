import { createMonthNode,createMonthControlArea } from "./create";
import './index.scss';
import { createTable } from '../creater';

export function render(container,year,month){
   console.log("=======")
    console.log("render")

    container.innerHTML = '';
    const oTable = createTable('my-month-calendar-table');
    const controlArea = createMonthControlArea(year);
    const monthNode = createMonthNode(month);

    monthNode.forEach(tr => {
        oTable.appendChild(tr);
    });

    container.appendChild(controlArea);
    container.appendChild(oTable);
    
}

export function update(year){
    const oYear = document.querySelector('.title-year');
    oYear.innerText = year;
}
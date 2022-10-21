import {ALLOWED_FLAGS, getFlag, setFlag} from './store';

let target = null;
export default (...args) => {
    const [container] = args;
    container.addEventListener('click', handlerClick.bind(null,...args),false);
}


function handlerClick(...args){
    const [container,handler,dateInfo,e]=args;
    const tar = e.target;
    const className = tar.className;
    const flag = getFlag();
    if(className.includes('day current-day')){

      dateClick(tar,handler);
      return;
    }
    if(className.includes('decade-year')){
        yearClick(container,tar,dateInfo);
        return;
    }
    if(className==='title-year'){
        titleYearClick(container,dateInfo);
        return;
    }
    if(className === 'title-month'){
        titleMonthClick(container,dateInfo);
        return;
    }
    if(className.includes('static-month')){
        monthClick(container,tar,dateInfo);
        return;
    }
    
    console.log(flag)
    switch(flag){
       
        case ALLOWED_FLAGS.YEAR:
            console.log("111")
            YearControClick(className,dateInfo)
            break;
        case ALLOWED_FLAGS.MONTH:
            MonthConotrolClick(className,dateInfo)
            break;
        case ALLOWED_FLAGS.DATE:
            DateControClick(className,dateInfo)
            break;
    }
}

function titleYearClick(container,dateInfo){

    setFlag(ALLOWED_FLAGS.YEAR,container,dateInfo);
    console.log('titileYear')
}

function titleMonthClick(container,dateInfo){
    setFlag(ALLOWED_FLAGS.MONTH,container,dateInfo);

}

function yearClick(container,tar,dateInfo){
    dateInfo.year = Number(tar.dataset.year);
    console.log('----------')
    console.log(dateInfo.year,container,ALLOWED_FLAGS.DATE)
    setFlag(ALLOWED_FLAGS.DATE,container,dateInfo); 
}

function  monthClick(container,tar,dateInfo){
    dateInfo.month = Number(tar.dataset.month);
    console.log('----------')
    console.log(dateInfo.year,container,ALLOWED_FLAGS.DATE)
    setFlag(ALLOWED_FLAGS.DATE,container,dateInfo); 
}

function dateClick(tar){
    if(target){
        console.log("tar")

        console.log(tar.className)
        target.className = target.className.replace(' selected','');  
    }
    target = tar;
    tar.className +=' selected';
    // handler && handler(tar.dataset.date);
   
}

function DateControClick(className,dateInfo){
    switch(className){
        case 'control-btn btn-year-lt':
    console.log("dateCOntrolClick"+className)
          dateInfo.year -= 1;
    console.log(className)

        console.log('control-btn btn-year-lt');
            break;

        case 'control-btn btn-month-lt':
           dateInfo.month > 1 && (dateInfo.month -= 1);
        console.log('control-btn btn-month-lt');
            break;

        case 'control-btn btn-month-gt':
           dateInfo.month<12 && ( dateInfo.month += 1);
        console.log('control-btn btn-month-gt');
            break;

        case 'control-btn btn-year-gt':
        dateInfo.year += 1;
        console.log('control-btn btn-year-gt')
            break;

        default:
            break;
    }
}



function YearControClick(className,dateInfo){
    console.log(className)
    switch(className){
        case 'year-control-btn btn-year-lt' :
            console.log("get1")
            dateInfo.year -=10;
            break;
        case 'year-control-btn btn-year-gt' :
            dateInfo.year +=10
            break;
        default :
            break;
    }
}

function  MonthConotrolClick(className,dateInfo){
    console.log(className)

    switch(className){
        case 'month-control-btn btn-month-lt' :
            console.log("get1")
            dateInfo.year -=1;
            break;
        case 'month-control-btn btn-month-gt' :
            dateInfo.year +=1
            break;
        default :
            break;
    }
}
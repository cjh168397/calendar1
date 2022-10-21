// import {getDateInfo} from './date/utils';
import { render } from './date/render';
import './index.scss';
import event from './event';
import {reactive} from './store';
import { getDateInfo } from './utils';

export default (...args)=> {
    if(args.length === 2 && typeof args[1] ==='function'){
        const [year,month]= getDateInfo();
        const [el,handler] = args;
        init(el,[year,month],handler);
    }else{
        const [el,[year,month],handler]=args;
        init(el,[year,month],handler);
    }
   
}
function init(el,[year,month],handler){
    const oApp = document.querySelector(el);
  
    const oContainer = document.createElement('div');
    const dateInfo = reactive({year,month});
    console.log("datein before")

    console.log(dateInfo)

    oContainer.className = 'my-calendar';

    render(oContainer,year,month);
    console.log("render")
    event(oContainer,handler,dateInfo);
    console.log(oApp)
    oApp.appendChild(oContainer);
    
    console.log('oApp.appendChild(oContainer);')
}
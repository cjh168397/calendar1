

const domPoll = {
    table: null

}
export function createTable(className) {
    if (!domPoll.table) {
        domPoll.table = document.createElement('table');
    }else{
        domPoll.table.innerHTML = '';
    }
    domPoll.table.className = className;

    return domPoll.table;
}
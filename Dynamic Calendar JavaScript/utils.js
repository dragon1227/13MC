const today = new Date();
var firstOfYear = new Date(today.getFullYear(), 0,0);

const getDateDifference =  (a,b) => Math.ceil((a.getTime() - b.getTime())/3600/24/1000);
const isLeapYear = (a) => new Date(a.getFullYear(), 2, 0).getDate()==29;

const isLeapOver = (a) => {
    if (!isLeapYear(a)) return false;
    return getDateDifference(a, firstOfYear) > 366/2;
}

const isLeapDay = (a) => {
    if (!isLeapYear(a)) return false;
    return getDateDifference(a, firstOfYear) == 366/2;
}

const isYearDay = (a) => (getDateDifference(a, firstOfYear)==(364+(isLeapYear(a)?2:1)));

const getToday = (a) => isYearDay(a)?-2:isLeapDay(a)?-1:isLeapOver(a)?getDateDifference(a, firstOfYear)-1:getDateDifference(a, firstOfYear);

const getMonth = (a) => {
    return isYearDay(a)?13:isLeapDay(a)?7: Math.ceil(getToday(a)/28);
}

const getYear = (a) => Number(a.getFullYear());

const getDate = (a) => {
    let t = getToday(a);
    if ( t < 0 ) return t;
    return t - (getMonth(a)-1) * 28;
}

const getDay = (a) => {
    let t = getToday(a);
    if ( t < 0 ) return t;
    return (getDate(a)-1)%7;
}

const getFull13MCDate = (y,m,d) => {
    let t = new Date(y,m,d);
    firstOfYear = new Date(y, 0,0);
    console.log(y,m+1,d);
    let a = getYear(t);
    let b = getMonth(t);
    let c = getDate(t);
    let dd = getDay(t);
    return {
        year:a,
        month:b,
        date:c,
        day:dd,
    }
}

var cur13 = getFull13MCDate(today.getFullYear(), today.getMonth(), today.getDay());
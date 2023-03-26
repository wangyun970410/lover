// 传入时间，返回距离现在的天数
// 传入时间大于现在，返回正数
// 传入时间小于现在，返回负数
function differTime(time) {
    const date1 = new Date(time);
    const date2 = new Date();
    const Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = 0;
    if (Difference_In_Time > 0) {
        Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    } else {
        Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    }
    return Difference_In_Days;
}

//console.log(differTime("2022/04/15"));
//console.log(differTime("2023/04/15"));

module.exports = {
    differTime
}

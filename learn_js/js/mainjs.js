function first_degree(a, b)
{
    if(a==0 && b==0)
        return "INF"
    if (a==0 && b!=0)
        return "No solution"
    return Math.round(-b/a,2)
}
/* Ham first_degree chi giai phuong trinh */
/* Ham call_first_degree hien thi ket qua len giao dien */
function call_first_degree(a, b, result1, result2)
{
    r=first_degree(a,b)
    result1.value=r
    result2.innerText=r
}
function is_leap_year(year)
{
    if((year%4==0 && year%100!=0) || (year%400==0))
        return true
    else
        return false
}
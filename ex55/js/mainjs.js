function quadratic(a, b, c) 
{
    if (a == 0)
        if (b == 0)
            if (c == 0)
                return "Infinite solutions";
            else
                return "No solution";
        else
            return "x = " + (-c / b);

    delta = b*b - 4*a*c;

    if (delta < 0)
        return "No real roots";

    if (delta == 0) 
        {
            x = -b / (2*a);
            return "Double root: x = " + x;
        }

    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    return "x1 = " + x1 + "\n" + "x2 = " + x2;
}

function call_quadratic(a, b, c, result) 
{
    result.value = quadratic(a, b, c);
}

function findMax(a, b, c)
{
    if (a > b)
        if (a > c)
            return a;
        else
            return c;
    else if (b > c)
        return b;
    else
        return c;
}

function call_Max(a, b, c, result)
{
    max_val = findMax(a, b, c);
    result.value = max_val;
}

function findMin(a, b, c)
{
    if (a < b)
        if (a < c)
            return a;
        else
            return c;
    else if (b < c)
        return b;
    else
        return c;
}

function call_Min(a, b, c, result)
{
    min_val = findMin(a, b, c);
    result.value = min_val;
}

function call_multiply(a, b, result)
{
    result.value = a*b; 
}

function find_sin(a, result) {
    rad = a * Math.PI / 180;    
    s = Math.sin(rad);
    result.value = s;
}

function find_cos(a, result) {
    rad = a * Math.PI / 180;
    c = Math.cos(rad);
    result.value = c;
}
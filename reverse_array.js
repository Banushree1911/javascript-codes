let ar = [1, 2, 3];
let ar2 = reverseArray(ar);
println(ar2);

function reverseArray(ar)
{
    let ar2 = [];
    
    for(let i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}
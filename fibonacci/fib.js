const num=+prompt('Enter a number :')

for (let i=1 ;i<=num ; i++){
    function fib(i)
    {
        if(i==1)
            return 0;
        if (i==2)
            return 1;
        return fib(i-1)+fib(i-2);
    

    }
 
    document.write(fib(i))
    document.write('_')
}


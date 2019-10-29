const arr = [10, 12, 15, 21];


    for (var i = 0; i < arr.length; i++) {
        setTimeout(function() {
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
    }


console.log('Способ 1')

    for (var i = 0; i < arr.length; i++) {   
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }
    


console.log('Способ 2') 

    arr.forEach(function(item, i, arr){
        console.log('Index: ' + i + ', element: ' + arr[i]);
    });

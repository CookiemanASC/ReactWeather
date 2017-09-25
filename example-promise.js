// function getTempCallback(location, callback){

//     callback(undefined,78);
//     callback('City Not Found');

// };

// getTempCallback('Belfast',function(err, temp){

//     if(err){
//         console.log('error',err);
//     }else{
//         console.log('success',temp);
//     }
// });

// function getTempPromise(location){

//     return new Promise(function(resolve, reject){
//         resolve(79);
//         reject('City Not Found');
//     });

// };

// getTempPromise('Belfast').then(function(temp){
//     console.log('Promise Success', temp);
// },function(err){
//     console.log('Promise Error', err);
// });

//Challenge Area

function adPromise(a, b){

    return new Promise(function(resolve,reject){

        if((typeof a === 'number')&&(typeof b === 'number')){
            resolve(a+b);
        }else{
            reject('Valid Numbers Are Required!');
        }
    });

};

adPromise(2,5).then(function(total){
    console.log('Total: ',total);
},function(err){
    console.log('Error: ',err);
});
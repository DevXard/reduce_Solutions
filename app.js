const arr = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'},
];

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const names = ['Elie', 'Colt', 'Tim', 'Matt']

//////////////////////////////////////////  REDUCE  ///////////////////////////////////////

function extractValue(arr, str){
    return arr.reduce(function(acum, next){
        acum.push(next[str])
        return acum
    }, [])
}

function vowelCount(str){
    let vowels = 'aeiou'
    return str.toLowerCase().split('').reduce(function(acc, next){
       if(vowels.includes(next)){
           if(acc[next] === undefined){
               acc[next] = 1
           }else {
               acc[next]++
           }
       }
       return acc;

    },{})
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next){
        if(next[key] === undefined){
            next[key] = value
        }
        return acc
    }, arr)
}

//////////////////////////////////////////  HELPERS  ////////////////////////////////

function isEven(num){
    return num % 2 === 0;
}

function isLongerThanThreeCharecters(val){
    return val.length > 3;

}

////////////////////////////////////////////////////////////////////////////////////

function partition(arr, func){
    let arr1 = arr.reduce(function(acc, next){
        if(func(next)){
            acc.push(next)
        }
        return acc;
    }, [])

    let arr2 = arr.reduce(function(acc, next){
        if(!func(next)){
            acc.push(next)
        }
        return acc;
    },[])

    return [arr1, arr2]
}
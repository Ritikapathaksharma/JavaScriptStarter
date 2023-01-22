
console.log('hello world!')
let arr1 = [2,1,2,4,5,];
let arr2 = [4,1,16,25,4];

function isSquare(arr1,arr2){
let map1={};
let map2={};

    for(let items of arr1){
        map1[items]=(map1[items] || 0)+1;
    }
    for(let items2 of arr2){
        map2[items2]=(map2[items2] || 0)+1;
    }
    for(let key in map1){
        if(!map2[key*key]){
            return false;
        }
        if(map1[key]!==map2[key*key]){
            return false;
        }
    }
    console.log(map1,map2);
    return true;
}

console.log(isSquare(arr1,arr2));
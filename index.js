let initialCollection = [1,2,3,45]
function helperFunction (collection){
    if(Array.isArray(collection)){
        return collection.slice()
    }
    else {
        return Object.values(collection)
    }
}
function myEach(collection, callback){
    let newCollection = helperFunction(collection)
    console.log(newCollection)
    newCollection.map((x) => callback(x))
    return collection
}

function myMap(collection, callback){
    let newCollection = helperFunction(collection)
    console.log(newCollection)
    let mapCollection = newCollection.map((x) => callback(x))
    return mapCollection
}

function myReduce(collection, callback, acc){
    let newCollection = helperFunction(collection)
    if (acc === undefined){
        return newCollection.reduce(callback)
    }
    else{
        return newCollection.reduce(callback, acc)
}
}



function myFind(collection, predicate) {
    const newCollection = helperFunction(collection);
    return newCollection.find(predicate);
  }

 function myFilter(collection, predicate){
    const newCollection = helperFunction(collection);
    return newCollection.filter(predicate);  
 }
const collection1 = [1, 3, 5, 7];
const collection2 = [2, 4, 6, 8];
const collection3 = [1, 2, 3, 4, 5, 6, 7, 8];



function mySize(collection){
    if(Array.isArray(collection)){
        return collection.slice().length
    }
    else {
        return Object.values(collection).length
    }
 }

 function myFirst(array, n) {
    if (n === undefined) {
        console.log(n)
        debugger
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.slice(1)
console.log(lastElement)
function myLast(array, n) {
    if (n === undefined) {
      return array[array.length -1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object){
    return Object.keys(object)
  }

  function myValues(object){
    return Object.values(object)
  }
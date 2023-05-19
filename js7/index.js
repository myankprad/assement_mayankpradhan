function sum(...elements){
return new Promise((resolve, reject)=>{
    if(elements.length > 3){
        reject("Only three element and less than three element allowed")
    }
    else{
        let i = 0;
        let sum = 0;
        {
           while(i< elements.length){
            sum += elements[i]
            i++;
           }
           resolve("Sum is " + sum)
        }
    }
})
}

// .then and .catch

sum(4, 5, 6)
.then(result => console.log(result))
.catch(error=> console.log(error))
// function without currying

const add = (a, b, c) => a + b + c ;

add(2, 2, 5)

// same function with currying

const currying =(a)=>{
    return (b) =>{
        return (c)=>{
            return a+b+c
        }
    }
}

currying(2)(2)(5)
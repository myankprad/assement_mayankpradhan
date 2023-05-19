function makeFun(){
    const name = "Iron Man"
    function displayName(){
        console.log(name)
    }
    return displayName
}

const myfun = makeFun()
myfun()
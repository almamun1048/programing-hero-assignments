const listContainer = document.getElementById("list-container");
let count = 0 ;


document.getElementById("btn0").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn0").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Lionel Messi</p>`
    listContainer.appendChild(list)
    document.getElementById("btn0").disabled = true 
    document.getElementById("btn0").style.backgroundColor = "gray"
})

document.getElementById("btn1").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn1").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Neymar Jr</p>`
    listContainer.appendChild(list)
    document.getElementById("btn1").disabled = true 
    document.getElementById("btn1").style.backgroundColor = "gray"
})

document.getElementById("btn2").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn2").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Kylian Mbappe</p>`
    listContainer.appendChild(list)
    document.getElementById("btn2").disabled = true 
    document.getElementById("btn2").style.backgroundColor = "gray"
})

document.getElementById("btn3").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn3").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Vitor Machado</p>`
    listContainer.appendChild(list)
    document.getElementById("btn3").disabled = true 
    document.getElementById("btn3").style.backgroundColor = "gray"
})

document.getElementById("btn4").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn4").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Sergio Ramos</p>`
    listContainer.appendChild(list)
    document.getElementById("btn4").disabled = true 
    document.getElementById("btn4").style.backgroundColor = "gray"
})

document.getElementById("btn5").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn5").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Renato Sanches</p>`
    listContainer.appendChild(list)
    document.getElementById("btn5").disabled = true 
    document.getElementById("btn5").style.backgroundColor = "gray"
})

document.getElementById("btn6").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn6").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Cristiano Ronaldo</p>`
    listContainer.appendChild(list)
    document.getElementById("btn6").disabled = true 
    document.getElementById("btn6").style.backgroundColor = "gray"
})

document.getElementById("btn7").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn7").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Ronaldinho</p>`
    listContainer.appendChild(list)
    document.getElementById("btn7").disabled = true 
    document.getElementById("btn7").style.backgroundColor = "gray"
})

document.getElementById("btn8").addEventListener('click',function(){
    
    if(count === 5){
        alert("finished your select limit")
        document.getElementById("btn8").disabled = true
        return;
    }
    count++; 
    const list = document.createElement("li")
    list.innerHTML = `<spna>${count}</span> <p style="display: inline;">Di Maria</p>`
    listContainer.appendChild(list)
    document.getElementById("btn8").disabled = true 
    document.getElementById("btn8").style.backgroundColor = "gray"
})

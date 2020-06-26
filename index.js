
const bud = document.querySelector("#amount")
const calc = document.querySelector("#calc")
const expName = document.querySelector("#exp-name")
const exp = document.querySelector("#exp")
const addEx = document.querySelector("#addEx")
const alertVal = document.querySelector(".alert")
const exAm = document.querySelector("#exAm")
let exSum = 0;
let budget = 0;



addEx.addEventListener("click", function(){

    if(expName.value == '' || exp.value == ''){
       alertDisplay()
    }
    else {
    const editItem
    const rm
    const display = document.querySelector("#display")

    let li = document.createElement("li")

    li.innerHTML = "<h6>" +expName.value+"</h6>" + "<h5>$" + exp.value+"</h5>" + 
    "<a href='#' class='editItem' onclick='editItem(this)'><i class='fa fa-edit' aria-hidden='true'></i></a>&nbsp;&nbsp;" + 
    "<a href='#' class='trash' onclick='rm(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>" ;
     
    li.classList.add("list-item")
    display.appendChild(li)
    
    exSum += parseInt(exp.value)
    exAm.innerHTML = exSum
    document.querySelector("#bal").innerHTML = bal(budget, exSum)
    expName.value = ''
    exp.value = ''
    
    }
})


calc.addEventListener("click", function(){
    if(bud.value == ''){
        alertDisplay()
    }
    else{
        budget = parseInt(bud.value)
        document.querySelector("#budAm").innerHTML = bud.value
        document.querySelector("#bal").innerHTML = bal(budget, exSum)
        bud.value = ''
    }
})

function alertDisplay(){
    alertVal.append("Values can't be empty or negative (:")
    alertVal.style.display = 'block'
    setTimeout(() => {
        alertVal.innerHTML = ""
        alertVal.style.display = 'none'
    }, 1000);
}

function bal(amountIn, amountOut){
   
    const balAmount = amountIn - amountOut
    
    return balAmount
}

  rm = (btn) =>{

    let amt = btn.parentElement.childNodes[1].innerText
    exSum = exSum - parseInt(amt.slice(1, amt.length))
    document.querySelector("#bal").innerHTML = bal(budget, exSum)
    exAm.innerHTML = exSum
    btn.parentElement.remove()
    
}

  editItem = (btn) =>{
  
    let name = btn.parentElement.firstChild.innerText
    let amt = btn.parentElement.childNodes[1].innerText
    
    expName.value = name
    exp.value = parseInt(amt.slice(1, amt.length))
    rm(btn)
}



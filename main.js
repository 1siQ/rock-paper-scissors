win = 0
lose = 0
tie = 0




function start(object) {
    document.getElementById("tas").style.display = "none"
    document.getElementById("kagit").style.display = "none"
    document.getElementById("makas").style.display = "none"
    succes =  document.getElementById("winortie")
    succes.innerHTML = ""  

    const pc = ["tas", "kagit", "makas"];
    rand = Math.floor(Math.random()*3)
    select = pc[rand]
    console.log(select)




    switch (select) {
        case "tas":
            document.getElementById("tas").style.display = "block"
            break;
    
        case "kagit":
            document.getElementById("kagit").style.display = "block"
            break;
    
        case "makas":
            document.getElementById("makas").style.display = "block"
            break;
    
        default:
            break;
    }
    if (object == "tas" && select == "makas") 
    {
        succes.innerHTML = "Win" 
        succes.style.color = "green" 
        win += 1  
    }
    else if (object == "tas" && select == "kagit")
    {
        succes.innerHTML = "Lose"  
        succes.style.color = "red" 
        lose += 1    
    }
    else if (object == "tas" && select == "tas")
    {
        succes.innerHTML = "TİE"  
        succes.style.color = "yellow" 
 
        tie += 1   

    }
    else if (object == "kagit" && select == "makas") 
    {
        succes.innerHTML = "Lose"  
        succes.style.color = "red" 
  
        lose += 1    

    }
    else if (object == "kagit" && select == "kagit")
    {
        succes.innerHTML = "TİE"  
        succes.style.color = "yellow" 
   
        tie += 1   

    }
    else if (object == "kagit" && select == "tas")
    {
        succes.innerHTML = "Win"  
        succes.style.color = "green" 
   
        win += 1  

    }
    else if (object == "makas" && select == "makas") 
    {
        succes.innerHTML = "TİE"  
        succes.style.color = "yellow" 

        tie += 1   
    }
    else if (object == "makas" && select == "kagit")
    {
        succes.innerHTML = "Win"  
        succes.style.color = "green" 
  
        win += 1  

    }
    else if (object == "makas" && select == "tas")
    {
        succes.innerHTML = "Lose"  
        succes.style.color = "red" 
  
        lose += 1    

    }


// document.getElementById("robot").innerHTML = select
document.getElementById("win").innerHTML = win
document.getElementById("lose").innerHTML = lose




}
function reset() {
    win = 0
    lose = 0
    tie = 0
    select = ""
    document.getElementById("tas").style.display = "none"
document.getElementById("kagit").style.display = "none"
document.getElementById("makas").style.display = "none"
document.getElementById("winortie").innerHTML= ""
    document.getElementById("win").innerHTML = win
    document.getElementById("lose").innerHTML = lose
}




let heading=document.querySelector(".heading")

    let count=0
  
function counterjs(){
    count++
    heading.innerHTML=`${count}+`;

    if (count==1){
        heading.style.color="blue"
    } else if (count==2){
            heading.style.color="olive"
        } else if(count==3){
                heading.style.color="green"
            } else if(count==4){
                    heading.style.color="purple"
                } else if(count==5){
                     heading.style.color="brown"
                     clearInterval(stop);
                }
                            

    
}

let stop=setInterval(()=>{
    counterjs()

    
},heading.dataset.speed)



let counter=document.querySelectorAll(".counter")
let arr=Array.from(counter)
arr.map(item=>{

    let count=0
function mainCounter(){
    count++
    item.innerHTML=`${count}%`
 

    if(count==item.dataset.number){
        clearInterval(stop)

    }
}

let stop=setInterval(()=>{
    mainCounter()

    
},item.dataset.speed)


})


let typing=document.querySelector(".typing")

let count1=0
function typejs(){
    typing.innerHTML+=typing.dataset.text.charAt(count1);
    count1++

    if(count1==typing.dataset.text.length+1){
        typing.innerHTML=""
        count1=0
    }

}

let end=setInterval(()=>{
    typejs()
},500)



que = [
    {
        question:"What is the full form of FSD",
        Options:['Full stack development','Free stack development','Full safety development','Full safe Developer'],
        ans:0
    },
    {
        question:"Which style is given more priority",
        Options:['inline','internal','external','inios'],
        ans:0
    },
    {
        question:"Which symbol indicates universal selector",
        Options:['/','|','*','-'],
        ans:2
    },
    {
        question:"Which method removes first element in array in JS",
        Options:['pop','push','poll','shift'],
        ans:3
    },
    {
        question:"Which method will element at the starting in JS",
        Options:['unshift','shift','push','pop'],
        ans:0
    }
]
let count = 0;
let question = document.querySelector('.que');
let button = document.querySelector('#submit');
let opt = document.querySelector('.opt');
let index = 0;
let user = '';
button.addEventListener('click',()=>{
    if(user === que[index].ans)
        count+=1;
    index++;
    user = "";
    question.innerHTML = '';
    opt.innerHTML = '';
    next();
})
let next = ()=>{
    if(index == 5){
        document.querySelector('.body').innerHTML = '<h1>result</h1><br/><span>'+count+'/5</span><br><button onclick="window.location.reload()">Restart</button>';
        return "";
    }
    question.innerHTML = que[index].question;
    que[index].Options.forEach((e,i)=>{
        opt.innerHTML+="<div class='ans'> <input type='radio' name='opt' id='opt"+i+"'/><label for='opt"+i+"'>  "+e+"</label></div> <br/>";
    })
    let ans = document.querySelectorAll('.ans')
    ans.forEach((e,i)=>{
        e.addEventListener('click',()=>{
            user = i;
        })
    })
}
next();

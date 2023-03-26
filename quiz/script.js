que = [
    {
        question:"In which year India won one day cricket world cup?",
        Options:['2015','2011','2019','2007'],
        ans:1
    },
    {
        question:"Who was the Captain of Indian Cricket team in 2011 world cup?",
        Options:['Kohli','Rohith','Dhoni','Sachin'],
        ans:2
    },
    {
        question:"Which IPL team has heighest number of IPL trophies?",
        Options:['CSK','SRH','MI','RCB'],
        ans:2
    },
    {
        question:"How many one day cricket world cups won by India?",
        Options:['3','4','1','2'],
        ans:3
    },
    {
        question:"who is Captain of present Indian Cricket team",
        Options:['rohith','kohli','dhoni','hardik'],
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
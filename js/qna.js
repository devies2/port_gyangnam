const quests = document.querySelectorAll('.quest');

quests.forEach( (quest,index) => {
    quest.addEventListener('click', ()=>{
        quests[index].classList.toggle('on');
    })
});


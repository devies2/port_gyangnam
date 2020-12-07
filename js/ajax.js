const ajax =new XMLHttpRequest();
ajax.open('GET', './data.json', true);
ajax.send();

ajax.onload = ()=>{
    if(ajax.status===200){
        const tabCont = document.querySelector('.tabCont_wrap');
        let getData = JSON.parse(ajax.responseText);
        let abc = `<div class="tabCont">`;
        getData.forEach((data, index) => {
            console.log(`index: ${index}`);
            abc += `<a class="tab__item" href="#none" data-filter="${data.cuisine}">`
            abc += `<img src="./images/음식모음/${data.image}.jpg" alt="${data.name}"  onerror=' this.src = "./images/음식모음/error.jpg" '>`
            abc += `</a>`
        });
        abc += `</div>`;
        tabCont.innerHTML = abc;

    } else {
        console.log('실패');
    }
    if (document.querySelector('.tabCont')) {
        const tabBtn = document.querySelector('.tabTit');
        const tabItm = document.querySelectorAll('.tab__item');
        tabBtn.addEventListener('click', (e) => {
            const btnOn = document.querySelector('.tab.on');
            e.preventDefault();
            btnOn.classList.remove('on');
            e.target.classList.add('on');
            const target = e.target.dataset.cuisine;
            tabItm.forEach(item => {
                if (target === '*' || target === item.dataset.filter) {
                    item.classList.remove('invisible');
                } else {
                    item.classList.add('invisible');
                }
            });
        })
    } else {
        console.log('TAB FAIL');
    }
}

const ajaxBoard = new XMLHttpRequest();
ajaxBoard.open('GET', './board.json', true);
ajaxBoard.send();

ajaxBoard.onload = () => {
    if (ajaxBoard.status == 200) {
        const boardContWrap = document.querySelector('.boardContWrap');
        let getData = JSON.parse(ajaxBoard.responseText);

        let cont = '<ul class="boardCont active">';
        getData.forEach((data, index) => {
            if (index % 5 === 0 && index !== 0) {
                cont += `</ul><ul class="boardCont">`
            }
            cont += `<li><a href="#">`;
            cont += `<p>${data.title}</p>`;
            cont += `<span>${data.date}</span>`;
            cont += `</a></li>`
        });
        cont += `</ul>`
        boardContWrap.innerHTML = cont;
        
        let boardIndex = getData;
        let a = Math.ceil(boardIndex.length / 5);

        let b = '';
        for (let i = 1; i <= a; i++) {
            if (i == 1) {
                b += `<span class="pageBtn current"><a href="#none">${i}</a></span>`;

            } else {
                b += `<span class="pageBtn"><a href="#none">${i}</a></span>`;
            }
        }
        const paging = document.querySelector('.paging');
        paging.innerHTML = b;
        
        const pageBtn = document.querySelectorAll('.pageBtn');
        const boardCont = document.querySelectorAll('.boardCont');

        pageBtn.forEach( (data, index) => {
            data.addEventListener('click', (e)=>{
                for(let i=0 ; i <pageBtn.length; i++){
                    boardCont[i].classList.remove('active');
                    pageBtn[i].classList.remove('current');
                }
                boardCont[index].classList.add('active');
                pageBtn[index].classList.add('current');
            })
        });
    } else {
        alert('통신 실패');
    }
}

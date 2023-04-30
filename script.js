
    const links = document.getElementsByClassName('page');
    const btn1 = document.querySelector('.btn1').addEventListener('click', prev)
    let currentele = document.querySelector('.init').innerText
    let topval = document.querySelector('.topval')

     topval.innerText = `This is PAGE ${currentele}`
    const btn2 = document.querySelector('.btn2').addEventListener('click', next)
    for (l of links) {
      l.addEventListener('click', rem);
    }
    
    function rem(e) {
      for (l of links) {
        l.classList.remove('init');
      }
      e.target.classList.add('init')
      topval.innerHTML = `This is PAGE ${e.target.innerText}`
      currentele = e.target.innerText
    }
    
    function prev(){
        if(currentele>links[0].innerText){
            for (l of links) {
                l.classList.remove('init');
            }
            currentele  = currentele - 1;
            topval.innerHTML = `This is PAGE ${currentele}`
            links[currentele-1].classList.add('init')
        }
    }
    
    function next(){
        if(currentele<links[links.length-1].innerText){
            for (l of links) {
                l.classList.remove('init');
            }
            currentele = Number(currentele ) + 1;
            topval.innerHTML = `This is PAGE ${currentele}`
            links[currentele-1].classList.add('init')
        }
    }

    const btn3 = document.querySelector('.btn3').addEventListener('click', first)

    function first(){
        for (l of links) {
            l.classList.remove('init');
        }
        let arr = [];
        document.querySelectorAll('.page').forEach((ele)=>{
          arr.push(ele.innerText)
        })
        currentele = arr[0]
        topval.innerHTML = `This is PAGE ${currentele}`
        links[currentele-1].classList.add('init')
        
    }
    const btn4 = document.querySelector('.btn4').addEventListener('click', last)

    function last(){
        for (l of links) {
            l.classList.remove('init');
        }
        let arr = [];
        document.querySelectorAll('.page').forEach((ele)=>{
          arr.push(ele.innerText)
        })
        currentele = arr[arr.length-1]
        topval.innerHTML = `This is PAGE ${currentele}`
        links[currentele-1].classList.add('init')
        
    }
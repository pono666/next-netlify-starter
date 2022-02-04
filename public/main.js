window.onload = function() {

    const scroller = document.querySelector('.dengimage');
    let windowheight = window.innerHeight /2;
    let height = scroller.clientHeight / 2;
    let hts =  height -  windowheight;
    window.scrollTo(0, hts);   
  

  };

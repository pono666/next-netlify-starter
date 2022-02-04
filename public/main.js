window.onload = function() {

    const setPosition = (animate=false) =>{
        window.onscroll = null;
        const scroller = document.querySelector('.dengimage');
        let windowheight = window.innerHeight /2;
        let height = scroller.clientHeight / 2;
        let hts =  height -  windowheight;

        let windowwidth = window.innerWidth /2;
        let width = scroller.clientWidth / 2;
        let wts =  width -  windowwidth;
        if(animate === true){
            window.scrollTo({
                top: hts,
                left: wts,
                behavior: 'smooth'
              })
        }else{
            window.scrollTo(wts, hts, 'smooth');
        }
        window.onscroll = resizeme;
    }    

    setTimeout(setPosition,100);

    let timer;
    
    const resizeme = () => {
        clearTimeout(timer);
        timer = setTimeout(function(){
            setPosition(true)}
            , 1000);
    }
    window.onscroll = resizeme;
    window.onresize = setPosition;

  };

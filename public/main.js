window.onload = function() {
    const scroller = document.querySelector('.dengimage');
    const originalAspect = scroller.clientWidth / scroller.clientHeight;

    const setPosition = (animate=false) =>{
        window.onscroll = null;

        //let aspectratio = 

        //const scroller = document.querySelector('.dengimage');
        let windowheight = window.innerHeight;
        let height = scroller.clientHeight ;
        let hts =  (height -  windowheight) / 2 ;

        let windowwidth = window.innerWidth ;
        let width = scroller.clientWidth ;
        let wts =  (width -  windowwidth) / 2;


       // let aspectratio = width / height;

            width = windowwidth;
           
        let testHeight = width / originalAspect
       if(testHeight < windowheight){
            height = windowheight;
            width = height * originalAspect;
       }

        scroller.width = width;
        scroller.innerHeight = height;
        
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

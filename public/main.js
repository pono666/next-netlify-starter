window.onload = function() {
    const scroller = document.querySelector('.dengimage');
    const originalAspect = scroller.width / scroller.height;

    const setPosition = (animate=false) =>{

        let windowheight = window.innerHeight;
        let height = scroller.width ;
        

        let windowwidth = window.innerWidth ;
        let width = scroller.width ;        

        width = windowwidth;
        height = windowheight;
        let testHeight = windowwidth / originalAspect;
       
        if(testHeight < windowheight){
            height = windowheight;
            width = height * originalAspect;
       }else{
            height = testHeight;
            width = windowwidth;
       }


        scroller.width = width;
        scroller.height = height;



        let hts =  (height -  windowheight) / 2 ;
        let wts =  (width -  windowwidth) / 2;
        
            document.querySelector('body').scrollTo({
                top: hts,
                left: wts,
                behavior: 'smooth'
              })
        

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
    //scroller.onscroll = resizeme;
    document.querySelector('body').addEventListener('scroll',resizeme);
    


  };

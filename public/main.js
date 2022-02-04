window.onload = function() {
    const scroller = document.querySelector('.dengimage');
    const originalAspect = scroller.width / scroller.height;

    const setPosition = (animate=false) =>{
        window.onscroll = null;

        //let aspectratio = 

        //const scroller = document.querySelector('.dengimage');
        let windowheight = window.innerHeight;
        let height = scroller.width ;
        

        let windowwidth = window.innerWidth ;
        let width = scroller.width ;
        


       // let aspectratio = width / height;

           // width = windowwidth;
           
        let testHeight = windowwidth / originalAspect;
        console.log('testHeight', testHeight, windowheight)
       
        if(testHeight < windowheight){
            height = windowheight;
            width = height * originalAspect;
            console.log('setHeight', height)
       }else{
            height = testHeight;
            width = windowwidth;
            console.log('!!setHeight', height)
       }
       console.log(width,height )


        scroller.width = width;
        scroller.height = height;



        let hts =  (height -  windowheight) / 2 ;
        let wts =  (width -  windowwidth) / 2;
        
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

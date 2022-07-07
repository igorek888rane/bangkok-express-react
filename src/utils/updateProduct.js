export const updatePosition = (initialTopCoordinate,containerPositionRight,CartWidth,setPositionCart) => {
    if(window.pageYOffset > initialTopCoordinate){
        let leftIndent = Math.min(
            containerPositionRight + 20,
            document.documentElement.clientWidth - CartWidth - 10)
        setPositionCart({position:'fixed',top:'50px',zIndex:'100',right:'10px',left:`${leftIndent}px`})
    }else {
        setPositionCart({position:'',top:'',zIndex:'',right:'',left:``})
    }
    if(document.documentElement.clientWidth <= 1154){
        setPositionCart({position:'',top:'',zIndex:'',right:'',left:``})
    }
}
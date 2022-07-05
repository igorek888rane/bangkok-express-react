export const computePosition = (e, sliderRef, segment) =>{
    let coordinateClick = e.clientX - sliderRef.current.getBoundingClientRect().left
    let relativeClick = coordinateClick / sliderRef.current.offsetWidth
    let reletivePercents = relativeClick * 100;
    let approximateValue = relativeClick * segment
    let valueRound = Math.round(approximateValue)
    let valuePercents = (valueRound / segment) * 100
    return {
        reletivePercents,
        valuePercents,
        valueRound,
        relativeClick,
    }
}
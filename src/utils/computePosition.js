export const computePosition = (e, sliderRef, segment) => {
    let coordinateClick = e.clientX - sliderRef.current.getBoundingClientRect().left
    let relativeClick = coordinateClick / sliderRef.current.offsetWidth
    if (relativeClick < 0) {
        relativeClick = 0;
    }
    if (relativeClick > 1) {
        relativeClick = 1;
    }
    let reletivePercents = relativeClick * 100;
    let approximateValue = relativeClick * segment
    let valueRound = Math.round(approximateValue)
    let valuePercents = (valueRound / segment) * 100

    return {
        reletivePercents,
        valuePercents,
        valueRound,

    }
}
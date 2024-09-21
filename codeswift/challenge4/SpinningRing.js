function spinningRings(innerMax, outerMax) {
    let innerPosition = innerMax+1;
    let outerPosition = 0;
    let moves = 0;
    while (true) {
        if (innerPosition === outerPosition) {
            return moves ;
        }
        innerPosition = innerPosition <= 0 ? innerMax : innerPosition-1;
        outerPosition = outerPosition >= outerMax ? 0 : outerPosition+1;
        console.log(innerPosition,outerPosition);
        moves++;
    }
}
console.log(spinningRings(2,3));

document.addEventListener('DOMContentLoaded', () => {
    const formTargetInfo = document.getElementById('target-info-form');

    formTargetInfo.addEventListener('submit', (event) => {
        event.preventDefault();

        const breakpointDist = parseInt(document.getElementById('breakpoint-dist').value);
        const breakpointBoard = parseInt(document.getElementById('breakpoint-board').value);
        const targetDist = parseInt(document.getElementById('target-dist').value);
        const targetBoard = parseInt(document.getElementById('target-board').value);
        const personalNum = parseInt(document.getElementById('personal-number').value);

        const ratio = targetDist / breakpointDist;
        const breakBoards = targetBoard - breakpointBoard;
        const ratioBoard = Math.round(ratio * breakBoards);
        const foulLineBoard = targetBoard + ratioBoard;
        const slideBoard = foulLineBoard + personalNum;
        const standBoard = slideBoard + ratioBoard;

        console.log(`1.ratio=${ratio}`);
        console.log(`2.breakBoards=${breakBoards}`);
        console.log(`3.ratioBoard=${ratioBoard}`);
        console.log(`4.foulLineBoard=${foulLineBoard}`);
        console.log(`5.slideBoard=${slideBoard}`);
        console.log(`6.standBoard=${standBoard}`);

        document.getElementById('foul-line').value = foulLineBoard;
        document.getElementById('slide-at').value = slideBoard;
        document.getElementById('stand-on').value = standBoard;
    });
});
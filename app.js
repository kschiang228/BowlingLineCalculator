document.addEventListener('DOMContentLoaded', () => {
    const sparePinsOptions = [
        { value: '1', text: '1'},
        { value: '2', text: '2'},
        { value: '3', text: '3'},
        { value: '4', text: '4'},
        { value: '5', text: '5'},
        { value: '6', text: '6'},
        { value: '7', text: '7'},
        { value: '8', text: '8'},
        { value: '9', text: '9'},
        { value: '10', text: '10'}
    ];

    const sparePinSelect = document.getElementById('select-spare-pin');

    sparePinsOptions.forEach((pin) => {
        const pinElement = document.createElement('option');
        pinElement.value = pin.value;
        pinElement.text = pin.text;
        sparePinSelect.appendChild(pinElement);
    });

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
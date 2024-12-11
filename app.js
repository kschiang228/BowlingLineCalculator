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

    // get reference to spare pin select
    const sparePinSelect = document.getElementById('select-spare-pin');

    // Populate spare pin select
    sparePinsOptions.forEach((pin) => {
        const pinElement = document.createElement('option');
        pinElement.value = pin.value;
        pinElement.text = pin.text;
        sparePinSelect.appendChild(pinElement);
    });
    sparePinSelect.value = '10';

    // handle spare pin select change
    sparePinSelect.addEventListener('change', (event) => {
        const selectedPin = parseInt(event.target.value);
        console.log(`Selected pin: ${selectedPin}`);
        const breakpointBoard = getTargetBoardFrPin(selectedPin);
        console.log(`Breakpoint board: ${breakpointBoard}`);
        
        const breakpointDist = 60;
        const targetBoard = parseInt( document.getElementById('spare-target-board').value);
        const targetDist = 15;
        const personalNum = 7;

        const [foulLineBoard, slideBoard, standBoard] = calculateLine(breakpointDist, breakpointBoard, targetDist, targetBoard, personalNum);
        displayResults(foulLineBoard, slideBoard, standBoard);
    });

    // handle spare target board input
    const spareTargetBoardInput = document.getElementById('spare-target-board');
    spareTargetBoardInput.addEventListener('input', (event) => {
        const targetBoard = parseInt(event.target.value);
        if(targetBoard < 1 || targetBoard > 35) {
            alert('Please enter a value between 5 and 35 for target board');
            document.getElementById('spare-target-board').value = 20;
            return;
        }
        const selectedPin = parseInt(document.getElementById('select-spare-pin').value);
        console.log(`Selected pin: ${selectedPin}`);
        const breakpointBoard = getTargetBoardFrPin(selectedPin);
        console.log(`Breakpoint board: ${breakpointBoard}`);
        
        const breakpointDist = 60;
        const targetDist = 15;
        const personalNum = 7;

        const [foulLineBoard, slideBoard, standBoard] = calculateLine(breakpointDist, breakpointBoard, targetDist, targetBoard, personalNum);
        displayResults(foulLineBoard, slideBoard, standBoard);        
    });

    const patternLengthInput = document.getElementById('pattern-length');
    patternLengthInput.addEventListener('change', (event) => {
        const patternLength = parseInt(event.target.value);
        if(patternLength < 32 || patternLength > 60) {
            alert('Please enter a value between 32 and 60 for pattern length');
            document.getElementById('pattern-length').value = 45;
            return;
        }
        const exitBoard = patternLength - 31;
        document.getElementById('exit-board').value = exitBoard;
    });

    const formTargetInfo = document.getElementById('target-info-form');

    formTargetInfo.addEventListener('submit', (event) => {
        event.preventDefault();

        const breakpointDist = parseInt(document.getElementById('breakpoint-dist').value);
        const breakpointBoard = parseInt(document.getElementById('breakpoint-board').value);
        const targetDist = parseInt(document.getElementById('target-dist').value);
        const targetBoard = parseInt(document.getElementById('target-board').value);
        const personalNum = parseInt(document.getElementById('personal-number').value);

        if(isNaN(breakpointDist) || isNaN(breakpointBoard) || isNaN(targetDist) || isNaN(targetBoard) || isNaN(personalNum)) {
            alert('Please enter valid numbers for all fields');
            return;
        }

        const [foulLineBoard, slideBoard, standBoard] = calculateLine(breakpointDist, breakpointBoard, targetDist, targetBoard, personalNum);
        displayResults(foulLineBoard, slideBoard, standBoard);
    });

    // gets target board from pin selected
    function getTargetBoardFrPin(pin) {
        switch (pin) {
            case 1:
                return 20;
            case 2:
                return 25;
            case 3:
                return 15;
            case 4:
                return 30;
            case 5:
                return 20;
            case 6:
                return 10;
            case 7:
                return 35;
            case 8:
                return 30;
            case 9:
                return 15;
            case 10:
                return 5;
            default:
                alert('Invalid pin value');
                return 0;
        }
    }

    // calculates target line
    function calculateLine(breakpointDist, breakpointBoard, targetDist, targetBoard, personalNum) {
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

        return [foulLineBoard, slideBoard, standBoard];
    }

    function displayResults(foulLineBoard, slideBoard, standBoard) {
        document.getElementById('foul-line').value = foulLineBoard;
        document.getElementById('slide-at').value = slideBoard;
        document.getElementById('stand-on').value = standBoard;        
    }
});


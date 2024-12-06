// document.addEventListener('DOMContentLoaded', () => {
//     const formTargetInfo = document.getElementById('TargetInfoForm');

//     formTargetInfo.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const breakpointDist = document.getElementById('BreakpointDist').value;
//         const breakpointBoard = document.getElementById('BreakpointBoard').value;
//         const targetDist = document.getElementById("TargetDist").value;
//         const targetBoard = document.getElementById('TargetBoard').value;
        
//         alert(`Target information\nBreakpoint Distance=${breakpointDist}\n` +
//             `Breakpoint Board=${breakpointBoard}\n` + 
//             `Target Distance=${targetDist}\n` + 
//             `Target Board=${targetBoard}`);

//     });
// });

$(document).ready(function() {
    $('#TargetInfoForm').on('submit', function(event) {
        event.preventDefault();

        var breakpointDist = $('#BreakpointDist').val();
        var breakpointBoard = $('#BreakpointBoard').val();
        var targetDist = $('#TargetDist').val();
        var targetBoard = $('#TargetBoard').val();

        alert(`Target information\nBreakpoint Distance=${breakpointDist}\n` +
            `Breakpoint Board=${breakpointBoard}\n` + 
            `Target Distance=${targetDist}\n` + 
            `Target Board=${targetBoard}`);

    });
});
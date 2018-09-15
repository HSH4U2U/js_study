// $('#btn1').on('click', blueDown);
// $('#btn2').on('click', whiteDown);
// $('#btn3').on('click', blueDotDown);
//
// function blueDown() {
//     $('.flag.blue').css('transform', 'rotate(45deg)');
//     setTimeout(returnFlag, 1000);
// }
// function whiteDown() {
//     $('.flag.white').css('transform', 'rotate(45deg)');
//     setTimeout(returnFlag, 1000);
// }
// function blueDotDown() {
//     $('.flag.blue.dot').css('transform', 'rotate(45deg)');
//     setTimeout(returnFlag, 1000);
// }
//
// function returnFlag() {
//     $('.flag').css('transform', 'rotate(0)')
// }

$('#send').on('click', sendkakao);

function sendkakao() {
    var message = $('.text-box textarea').val();
    if (message) {
        $('.chatbox div:last-child').after('<div class="my-bubble"></div>');
        $('.chatbox div:last-child').text(message);
    }
}
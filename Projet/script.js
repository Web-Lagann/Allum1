$(document).ready(function () {

    startgame(11);

    $('.allum').children().click(function () {
        let play = $('.allum').children();
        let number = play.length - this.id;

        if (number <= 3) {
            play.slice(-Math.abs(number)).fadeOut("normal", function () {
                $(this).remove();
                removeallum();
            });
        }

    })
        .hover(function () {
        let play = $('.allum').children();
        let number = play.length - this.id;

        if (number <= 3) {
            play.slice(-Math.abs(number)).addClass('hover');
        }
    },  function () {
        let play = $('.allum').children();
        play.slice(-3).removeClass('hover');
    });
});

function removeallum() {

    let play = $('.allum').children();
    let number = -Math.abs(Math.floor(Math.random() * 3) + 1);

    if (play.length == 2) {
        number = -1
    }
    else if (play.length == 3) {
        number = -2
    }
    else if (play.length == 4) {
        number = -3
    }
    else if (play.length == 1) {
        alert('Félicitation !');
        location.reload();
    }
    else if (play.length < 1) {
        alert('Dommage, la prochaine fois peux être ;)');
        location.reload();
    }
    play.slice(number).fadeOut("normal", function () {
        $(this).remove();
    });
}

function startgame(number) {
    for (var i = 0; i < number; i++) {
        $('.allum').append('<div class="img" alt="allumette" id="' + i + '"></div>');
    }
}



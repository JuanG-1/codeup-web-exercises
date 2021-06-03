$('#header').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', 'blue');
    }
);


$("#p-tag").dblclick(
    function(){
        $(this).css("font-size", "18px")
    }
);

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);



$(document).ready(function () {
    $("#header").hover(function() {
        var $self = $(this);
        var originalText = $self.text().trim();

        $("#header").text("インターポロエーターの時間");

        if (originalText == "インターポロエーターの時間") {
            $self.text("Time for the Interpolator");
        }

    });
});


$(document).ready(function () {
    $("#list1").hover(function() {
        var $self = $(this);
        var originalText = $self.text().trim();

        $("#list1").text("ランダム1");

        if (originalText == "ランダム1") {
            $self.text("random 1");
        }

    });
});

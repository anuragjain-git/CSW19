
// var h3 = document.getElementsByClassName('h-3');

// function myFunction () {
//     console.log(window.getComputedStyle(abc,null).getPropertyValue('position'));
//     console.log(window.getComputedStyle(abc,null).getPropertyValue('top'));

// var p1 = $("v-2").position();
// alert(p1.left);
// var y=p1.top;


function clear(){
    document.getElementById('i1').value = " ";
    document.getElementById('i2').value = " ";
}

function getPositionXY() {


    function getPositionXY() {
        var moves = 1;

    var i = $("#i1").val();
    var j = $('#i2').val();

    if ((i==1)&&(j==2)){

        if (moves == 1){

        const container = document.getElementById("abc");
        var rect = container.getBoundingClientRect();
        var x = rect.x;
        var y = rect.y;

        var d = document.getElementById('h3');
        d.style.left = x-8+'px';
        d.style.top = 73+y+'px';
        }

        // moves++;

        if (moves == 2) {
            var e = document.getElementById('h2');
            e.style.left = x-13+'px';
            e.style.top = 67+y+'px';
        }

    }
    
        


    }
    

    // else if ((i1==1)&&(i2==3)){
    //     const container = document.getElementById("def");
    //     var rect = container.getBoundingClientRect();
    //     var x = rect.x;
    //     var y = rect.y;

    //     var d = document.getElementById('h3');
    //     d.style.left = x-8+'px';
    //     d.style.top = 73+y+'px';
    // }


}

// }
let count = 0;

var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

// this is a loop:
btns.forEach(function (btn) {
    btn.addEventListener("click", function(event){
        var styles = event.currentTarget.classList;
        if (styles.contains("1")){
            count--;
        } else if (styles.contains("3")){
            count++;
        } else {
            count = 0;
        }

        if (count>0) {
            value.style.color = "blue";
        }

        value.textContent = count;
    })
})









// document.getElementById("FrontFlashcard").addEventListener("click", hideCard1)
document.getElementById("BackFlashcard").addEventListener("click", hideCard2)






// function hideCard1() {
//     var x = document.getElementById("BackFlashcard");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";console.log("this is hide card 1")
//     }
// }
// // function toggleCard() {
// //     var element = document.getElementById("FrontFlashcard");
// //     document.toggle("BackFlashcard");
// // }

function hideCard2() {
    var x = document.getElementById("FrontFlashcard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        // document.getElementById("FrontFlashcard").style.visibility.visible;
    }
}


// // function container(front,back) {this.front= front;
// //     this.back=back;

    
// // }
// // var userEnter = function(){
// //     var nFront = document.getElementById("newFront"),
// //         nBack = document.getElementById("newBack");
// //         if( nFront.value.isEmpty() || nBack.value.isEmpty() )
// //                 return;

// //             cardsHandle.cardAdd(nFront.value,nBack.value);
// //             nFront.value="";
// //             nBack.value="";
// //             cardsHandle.cardUpdate();
// //         }
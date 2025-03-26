const messageText = "আপনার জন্য রইলো ঈদের অগ্রিম শুভেচ্ছা ও অফুরন্ত ভালোবাসা!";

let index = 0;
function typeMessage() {
    if (index < messageText.length) {
        document.getElementById("message").innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeMessage, 100);
    }
}

window.onload = () => {
    setTimeout(typeMessage, 1000);
};

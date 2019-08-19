
const screenHeight = screen.height;
const screenWidth = screen.width;

const phoneBackground = document.querySelector(".spacer");
/*
    const spacerElements = document.getElementsByClassName("spacer");
    const firstSpacer = spacerElements[0];
*/

if (screenWidth <= 700){
    window.addEventListener('DOMContentLoaded', () => {
        const backgroundImages = [
            "BGI_1",
            "BGI_2",
            "BGI_3",
            "BGI_4",
            "BGI_5",
            "BGI_6",
            "BGI_7",
            "BGI_8"
        ]
        const num = Math.ceil(Math.random() * backgroundImages.length - 1);
        phoneBackground.style.background = `url('./images/${backgroundImages[num]}.png')`;
        phoneBackground.style.backgroundRepeat = "no-repeat";
        phoneBackground.style.backgroundAttachment = "fixed";
        phoneBackground.style.backgroundPosition = "center bottom 200px";
        phoneBackground.style.backgroundSize = "auto 100%";
        phoneBackground.style.overflow = "0";
    })
} else {
    window.addEventListener('DOMContentLoaded', () => {
        const backgroundvideos = [
        "BGV_1",
        "BGV_2",
        "BGV_3",
        "BGV_4",
        "BGV_5",
        "BGV_6",
        "BGV_7",
        "BGV_8"
        ]
        const num = Math.ceil(Math.random() * backgroundvideos.length - 1);
        document.body.innerHTML = "<video id='rawvideo' muted autoplay poster='' id='background-video' loop><source src='./images/"+ backgroundvideos[num] +".mp4' type='video/mp4'></video>" + document.body.innerHTML;
    })
}
//ウィンドウの読み込みのために3秒待つ
setTimeout(main = () => {
    const bottuns = {
        rewind : document.querySelectorAll('.sound-controller_item')[0],
        rewind3 : document.querySelectorAll('.sound-controller_item')[1],
        play : document.querySelectorAll('.sound-controller_item')[2],
        forward3 : document.querySelectorAll('.sound-controller_item')[3],
        forward : document.querySelectorAll('.sound-controller_item')[4],
    }
    const pushBottun = (e) => {
        if (e.keyCode === 37){
            bottuns.rewind3.click();
        }
        if (e.keyCode === 39){
            bottuns.forward3.click();
        }
        if (e.keyCode === 32) {
            bottuns.play.click();
        }
        if (e.keyCode === 37 && e.shiftKey === true) {
            bottuns.rewind.click();
        }
        if (e.keyCode === 39 && e.shiftKey === true) {
            bottuns.forward.click();
        }
    }

    console.log('loaded');
    window.addEventListener('keydown', pushBottun);
}
,3000);

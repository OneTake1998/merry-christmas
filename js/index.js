$(".btn").click(function () {
    $('.mask').addClass('hide');
    $('.btn').addClass('hide');
    //开启分割线
    $('.split-line').attr("visibility", "visible")
    //20s关闭雪花效果
    setTimeout(() => { $("canvas").eq(1).remove() }, 20000);
    var player = document.querySelector('audio#player');
    //如果是暂停则播放
    if (player.paused) {
        player.load()
    }
    //   justify-content: space-between;
    var result = `
.preview {
    background: #DEEEFD;
    position: relative;
    color: #d9604b;
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top:15px;
}

.split-line{
    display:block;
}

.santa {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -10px;
}

.hat {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}

.hat-top {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    border-top: 5px solid #964034;
    border-left: 5px solid #964034;
    border-right: 5px solid #964034;
    background: #d9604b;
    border-radius: 8px;
    border-top-left-radius: 80px;
    border-bottom-right-radius: 16px;
    height: 60px;
    width: 120px;
}

.ball {
    width: 30px;
    height: 30px;
    border: 5px solid #964034;
    position: absolute;
    background: #fff;
    border-radius: 15px;
    right: -18px;
    top: -18px;
}

.hat-side {
    width: 140px;
    height: 30px;
    border-radius: 8px;
    border: 5px solid #964034;
    background: #ffffff;
    margin-top: -5px;
    z-index: 5;
    position: relative;
}

.face {
    height: 60px;
    width: 120px;
    background: #ffeeda;
    border: 5px solid #964034;
    position: relative;
    z-index: 2;
}

.face .eyes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    margin: 20px auto 0 auto;
}

.face .eyes .eye {
    width: 12px;
    height: 12px;
    background: #964034;
    border-radius: 6px;
}

.head {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-top: -5px;
}

.head .ear {
    position: absolute;
    z-index: 1;
    width: 30px;
    height: 30px;
    background: #ffeeda;
    border: 5px solid #964034;
    border-radius: 15px;
}

.head .left-ear {
    top: 10px;
    left: -20px;
}

.head .right-ear {
    top: 10px;
    right: -20px;
}

.beard {
    position: absolute;
    width: 140px;
    left: -10px;
    top: 45px;
    z-index: 5;
    padding-top: 10px;
}

.beard .mouseAndNose {
    position: absolute;
    width: 50px;
    left: 0;
    right: 0;
    top: -5px;
    margin: auto;
    text-align: center;
    z-index: 5;
}

.beard .mouseAndNose .nose {
    width: 20px;
    height: 20px;
    background: #d9604b;
    border: 5px solid #964034;
    border-radius: 10px;
    display: inline-block;
    vertical-align: middle;
}

.beard .mouseAndNose .mouse {
    display: flex;
    justify-content: center;
    margin-top: -2px;
}

.beard .mouseAndNose .mouse .mouseLeft {
    height: 15px;
    width: 15px;
    border-bottom-right-radius: 20px;
    border-right: 5px solid #964034;
    border-bottom: 5px solid #964034;
}

.beard .mouseAndNose .mouse .mouseRight {
    height: 15px;
    width: 15px;
    border-bottom-left-radius: 20px;
    border-left: 5px solid #964034;
    border-bottom: 5px solid #964034;
}

.beard .beard1 {
    height: 35px;
    position: relative;
    border: 4px solid #964034;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #ffffff;
}

.beard .beard1:after {
    content: '';
    width: 98px;
    position: absolute;
    bottom: -7px;
    height: 10px;
    background: #ffffff;
    left: 17px;
    z-index: 5;
}

.beard .beard2 {
    height: 35px;
    width: 110px;
    position: relative;
    margin-left: 15px;
    border: 4px solid #964034;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #ffffff;
    margin-top: -6px;
}

.beard .beard2:after {
    content: '';
    width: 56px;
    position: absolute;
    bottom: -6px;
    height: 10px;
    background: #ffffff;
    left: 22px;
    z-index: 5;
}

.beard .beard3 {
    height: 35px;
    width: 70px;
    position: relative;
    margin-left: 35px;
    border: 4px solid #964034;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: #ffffff;
    margin-top: -6px;
}

.beard .beard3:after {
    content: '';
    width: 30px;
    position: absolute;
    bottom: -6px;
    height: 10px;
    background: #ffffff;
    left: 16px;
    z-index: 5;
}

.beard .beard4 {
    height: 30px;
    width: 40px;
    position: relative;
    margin-left: 50px;
    border: 4px solid #964034;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: #ffffff;
    margin-top: -6px;
}

.clothe {
    background: #d9604b;
    width: 140px;
    margin-top: 20px;
    height: 140px;
    position: relative;
}

.clothe .left-hand {
    position: absolute;
    height: 140px;
    width: 50px;
    background: #d9604b;
    border-left: 4px solid #964034;
    transform: rotate(12deg);
    left: -15px;
}

.clothe .right-hand {
    position: absolute;
    height: 140px;
    width: 50px;
    background: #d9604b;
    border-right: 4px solid #964034;
    transform: rotate(-12deg);
    right: -15px;
}

.clothe .line {
    height: 60px;
    position: absolute;
    bottom: 0;
}

.clothe .line1 {
    border-left: 4px solid #964034;
    transform: rotate(-12deg);
    left: 20px;
}

.clothe .line2 {
    border-right: 4px solid #964034;
    transform: rotate(12deg);
    right: 20px;
}


.ellipse {
    margin: 6px auto 0;
    width: 300px;
    height: 68px;
    background: white;
    border-radius: 50% / 50%;
    border: 4px solid #964034;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d9604b;
}

.kailong {
    margin: -4px auto 0;
    width: 0;
    height: 0;
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    border-top: 15px solid #964034;
}

.kailong2 {
    margin: -19px auto 8px;
    width: 0;
    height: 0;
    border-right: 25px solid transparent;
    border-left: 25px solid transparent;
    border-top: 15px solid white;
}

.preview h3 {
    visibility: visible;
    animation: blink ease 1.2s infinite alternate;
}

/* Merry Christmas Yellow Happy~~ */
  `;

    // .star {
    //     position: absolute;
    //     transform: scale(2);
    //     animation: blink ease 1s infinite alternate;
    // }
    let timeout = 10;
    let n = 0;

    function ele(selector) {
        return document.querySelector(selector);
    }
    function writeCode(result, timeout) {
        return setInterval(() => {
            n += 1;
            ele('#code').innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css, 'css');

            ele('#styleTag').innerHTML = result.substring(0, n);
            ele('.code-wrapper').scrollTop = ele('#code').scrollHeight;
            if (n >= result.length) {
                window.clearInterval(timerId);
            }
        }, timeout)
    }
    var timerId = writeCode(result, timeout);
});
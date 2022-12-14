const timerOutput = document.getElementById('timer');
const startBtn = document.getElementById('btnStart');
const stopBtn = document.getElementById('btnStop');

let intervalId = null;
let timerInput = Number(prompt('введите время в секундах'));


const startTimer = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay);

        if (!intervalId) {
            intervalId = setInterval(() => {
                let hour = Math.floor(timerInput / 60 / 60)
                let minutes = Math.floor(timerInput / 60 % 60)
                let seconds = timerInput % 60;

                if (timerInput >= 59) {
                    timerOutput.innerHTML = `${hour}:${minutes}:${seconds}`;
                    minutes--
                } else {
                    timerOutput.innerHTML = `${hour}:${minutes}:${seconds}`;
                    seconds--
                }
                timerInput--

                if (timerInput === -1) {
                    clearInterval(intervalId)
                    startTimer(30000).then(() => {
                        console.log("Timer end!");
                    });
                }
            }, 1000)
        }
    })


}


const start = () => {
    startTimer()
};

const stop = () => {
    clearInterval(intervalId);
    intervalId = null;
}



startBtn.addEventListener('click', start)
stopBtn.addEventListener("click", stop)




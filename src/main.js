
class CountdownTimer {
    constructor({ selector, targetDate } = {}) {
        this.countdown = null;
        this.selector = selector;
        this.targetDate = targetDate;
        this.run();
    }
    
    run() {
        const days = document.querySelector(`${this.selector} [data-value="days"]`);
        const hours = document.querySelector(`${this.selector} [data-value="hours"]`);
        const mins = document.querySelector(`${this.selector} [data-value="mins"]`);
        const secs = document.querySelector(`${this.selector} [data-value="secs"]`);

        //const daysLabel = days.nextSibling;
        const daysLabel = days.nextElementSibling;
        const hoursLabel = hours.nextElementSibling;
        const minsLabel = mins.nextElementSibling;
        const secsLabel = secs.nextElementSibling;
        

        const checkEnding = (labelRef, label, data) => {
            if (data % 10 != 1) {
               labelRef.textContent = label + "s";
            } else if (data === 11) {
                labelRef.textContent = label + "s";
            } else {
                labelRef.textContent = label;
            }
            
        }

        this.countdown = setInterval(() => {
            
            const time = this.targetDate - Date.now();
            
    
            if (time < 1000) {
                clearInterval(this.countdown)
            }


            let dayCurrent = Math.floor(time / (1000 * 60 * 60 * 24));
            checkEnding(daysLabel, 'Day', dayCurrent);
            days.textContent = String(dayCurrent).padStart(3, '0');

            let hourCurrent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            checkEnding(hoursLabel, 'Hour', hourCurrent);
            hours.textContent = String(hourCurrent).padStart(2, '0');


            let minCurrent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            checkEnding(minsLabel, 'Minute', minCurrent);
            mins.textContent = String(minCurrent).padStart(2, '0');
            

            let secCurrent = Math.floor((time % (1000 * 60)) / 1000);
            checkEnding(secsLabel, 'Second', secCurrent);
            secs.textContent = String(secCurrent).padStart(2, '0');

        }, 1000);
    }

    

}


const testCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 6, 2021'),
});













// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
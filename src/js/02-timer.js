import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const dateTimeEl = document.querySelector('#datetime-picker');

const btnStart = document.querySelector('[data-start]');




flatpickr(dateTimeEl, {

  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    const diffDate = selectedDates[0] - Date.now();


    if (diffDate <= 0) {
      alert("Please choose a date in the future");
      // btnStart.disabled = true;
      return

    }
    btnStart.disabled = false;

    btnStart.addEventListener('click', event => {
      timer.deadline = selectedDates[0];
      timer.start();
    });


  },


});


// ===============

const timer = {
  deadline: new Date(),
  intervalId: null,
  refs: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline - Date.now();

      if (diff <= 0) {
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.minutes.textContent = this.pad(minutes);
      this.refs.seconds.textContent = this.pad(seconds);


    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },

};


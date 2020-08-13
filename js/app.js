var app = new Vue({
  el: '#app',
  data() {
    return {
      button: 'Start',
      timerOn: false,
      timer: null,
      pickTime: null,
      totalTime: null,
      resetButton: false
    }
  },
  methods: {
    setTimeQuarter: function() {
      this.pickTime = 25 * 60;
      this.totalTime = this.pickTime;
    },
    start: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.timerOn = true;
    },
    stop: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.timerOn = false;
    },
    resetTimer: function() {
      this.totalTime = this.pickTime;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
        swal("Complete!!", "", "success");
      }
    }
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return minutes;
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  }
});
var DONE_DATE = new Date("10-24-2014 17:00:00");

JimboByeBye.ApplicationController = Ember.Controller.extend({
  init: function() {
    this._updateCountdown();
  },
  _updateCountdown: function() {
    if (moment().diff(DONE_DATE) > 0) {
      this.set("countdown", "He's gone...");
    } else {
      this.set("countdown", countdown(DONE_DATE).toString());    
      Ember.run.later(this, "_updateCountdown", 1000);
    }
  }
});

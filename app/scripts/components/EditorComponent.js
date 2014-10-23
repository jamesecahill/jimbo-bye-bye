JimboByeBye.EditorCmpComponent = Ember.Component.extend({
  didInsertElement: function() {
    var editor = ace.edit(this.get("test").get("id"));
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
    this.set("editor", editor);
  },
  actions: {
    doTest: function() {
      var script = this.get("editor").getValue();
      try {
      var check = eval(script);
      this.get("test").set("lastOutput", check);
      this.get("test").set("isSuccessful", check === this.get("test").get("output"));
      } catch (e) { this.get("test").set("lastOutput", e); }
    },
    reset: function() {
      this.get("test").set("isSuccessful", false);
      this.get("editor").setValue(this.get("test").get("input"), -1);
    }
  }
});

// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    updateField(fieldName, value) {
      this.appendField(fieldName, '');
      this.pressKey(['Shift', 'Home']);
      this.pressKey('Backspace');
    }
  });
}

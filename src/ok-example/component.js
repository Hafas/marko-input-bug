module.exports = class {
  onCreate () {
    this.state = {
      text: ""
    };
  }
  handleInput (event) {
    this.state.text = event.target.value;
  }
};

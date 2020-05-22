class Global {
  setterErrorMessage(value, goodValue) {
    console.error(
      "the setter of gender can't be " + value + " you would put " + goodValue
    );
  }
}

export default Global;

import Global from "./global";

class User extends Global {
  constructor({ gender, name, age }) {
    super();
    this._gender;
    this._name;
    this._age;
    this._minNameLength = 4;
    this._maxNameLength = 30;
    /// setteur
    this.setGender(gender);
    this.setName(name);
    this.setAge(age);
  }
  getGender() {
    return this.getGender;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setGender(gender) {
    if (gender == "M" || gender == "W") {
      this._gender = gender;
    } else {
      this.setterErrorMessage(gender, "'M' or 'W'");
    }
  }
  setAge(age) {
    if (!isNaN(age)) {
      this._age = age;
    } else {
      this.setterErrorMessage(age, "19");
    }
  }
  setName(age) {
    if (
      (typeof age === "string" || age instanceof String) &&
      age.length > this._minNameLength &&
      age.length < this._maxNameLength
    ) {
      this._name = age;
    } else {
      this.setterErrorMessage(
        age,
        `a string bettween ${this._minNameLength} and  ${this._maxNameLength} carracteres`
      );
    }
  }
}

export default User;

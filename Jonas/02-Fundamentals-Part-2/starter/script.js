"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  getSummary: function () {
    const str = `${this.firstName} is a ${2022 - this.birthYeah} old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return str;
  },
};
console.log(jonas.getSummary());

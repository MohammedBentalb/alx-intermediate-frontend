/// <reference path="./subjects/Java.ts" />

const Cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Mohammed",
  lastName: "Ali",
  experienceTeachingC: 10,
};

Cpp.setTeacher(cTeacher);
console.log(Cpp.getRequirements());
console.log(Cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

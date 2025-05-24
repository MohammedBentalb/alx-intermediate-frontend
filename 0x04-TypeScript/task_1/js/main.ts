interface teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface TStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements TStudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}

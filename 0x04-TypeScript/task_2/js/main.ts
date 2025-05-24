interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  getToWork(): string {
    return "Getting to work";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workDirectorTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
};

const isDirector = (employee: Director | Teacher): boolean => {
  return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  }
  if (!isDirector(employee)) {
    employee.workDirectorTasks();
  }
};

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
};

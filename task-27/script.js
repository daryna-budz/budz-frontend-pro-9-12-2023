class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((a, b) => a + b, 0);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("Масив відвідуваності заповнений");
      }
    }
  
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("Масив відвідуваності заповнений");
      }
    }
  
    getAttendanceRate() {
      const attendedClasses = this.attendance.filter(a => a !== null);
      if (attendedClasses.length === 0) return 0;
      const presentCount = attendedClasses.filter(a => a === true).length;
      return presentCount / attendedClasses.length;
    }
  
    summary() {
      const avgGrade = this.getAverageGrade();
      const attendanceRate = this.getAttendanceRate();
      if (avgGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (avgGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  

  const student1 = new Student("Саша", "Петрович", 2005);
  const student2 = new Student("Аня", "Жук", 2004);
  const student3 = new Student("Дмитро", "Крутий", 2002);
  
  
  student1.addGrade(95);
  student1.addGrade(88);
  student1.addGrade(92);
  
  student2.addGrade(85);
  student2.addGrade(87);
  student2.addGrade(89);
  
  student3.addGrade(75);
  student3.addGrade(78);
  student3.addGrade(80);
  
  
  student1.present();
  student1.present();
  student1.present();
  student1.absent();
  
  student2.present();
  student2.absent();
  student2.present();
  
  student3.absent();
  student3.absent();
  student3.present();
  
  console.log(`Ім'я: ${student1.firstName}, Прізвище: ${student1.lastName}, Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade().toFixed(2)}, Відвідуваність: ${student1.getAttendanceRate().toFixed(2)}`);
  console.log(student1.summary());
  
  console.log(`Ім'я: ${student2.firstName}, Прізвище: ${student2.lastName}, Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade().toFixed(2)}, Відвідуваність: ${student2.getAttendanceRate().toFixed(2)}`);
  console.log(student2.summary());
  
  console.log(`Ім'я: ${student3.firstName}, Прізвище: ${student3.lastName}, Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade().toFixed(2)}, Відвідуваність: ${student3.getAttendanceRate().toFixed(2)}`);
  console.log(student3.summary());
  
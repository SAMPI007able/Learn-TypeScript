import { Employee } from './app.js';

let emp_obj = new Employee('001', 'Sachin');
emp_obj.printSalary();
emp_obj.emp_code = '005';
emp_obj.printSalary();
package com.backend.spring.controller;

import java.util.List;

import com.backend.spring.dao.Employee;
import com.backend.spring.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;
    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // List all employees
    @GetMapping("/list")
    public String listEmployees(Model model) {
        logger.info("Fetching list of employees");
        List<Employee> employees = employeeService.findAll();
        model.addAttribute("employees", employees);
        return "employees/list-employees";
    }

    // Show form for adding a new employee
    @GetMapping("/showFormForAdd")
    public String showFormForAdd(Model model) {
        logger.info("Showing form for adding a new employee");
        Employee newEmployee = new Employee(); // Create new employee object
        model.addAttribute("employee", newEmployee);
        return "employees/employee-form";
    }

    // Show form for updating an employee
    @GetMapping("/showFormForUpdate")
    public String showFormForUpdate(@RequestParam("employeeId") int id, Model model) {
        logger.info("Showing form for updating employee with ID {}", id);

        Employee existingEmployee = employeeService.findById(id);
        if (existingEmployee == null) {
            logger.error("Employee with ID {} not found", id);
            return "redirect:/employees/notFound"; // Redirect to not found
        }

        model.addAttribute("employee", existingEmployee);
        return "employees/employee-form";
    }

    // Save or update the employee
    @PostMapping("/save")
    public String saveEmployee(@ModelAttribute("employee") Employee employee) {
        logger.info("Saving employee: {}", employee);
        employeeService.save(employee);
        return "redirect:/employees/list";
    }

    // Delete an employee
    @PostMapping("/delete")
    public String delete(@RequestParam("employeeId") int id) {
        logger.info("Deleting employee with ID {}", id);
        employeeService.deleteById(id);
        return "redirect:/employees/list";
    }

    // Handle NOT FOUND
    @GetMapping("/notFound")
    public String handleNotFound() {
        logger.warn("Employee not found redirect invoked.");
        return "employees/employee-not-found"; // Define a view for not found employees
    }
}


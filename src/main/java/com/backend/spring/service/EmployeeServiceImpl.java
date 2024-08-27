package com.backend.spring.service;

import com.backend.spring.dao.Employee;
import com.backend.spring.dao.EmployeeRepository;
import com.backend.spring.exception.EmployeeNotFoundException; // Add this line
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    private static final Logger logger = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository theEmployeeRepository) {
        this.employeeRepository = theEmployeeRepository;
    }

    @Override
    public List<Employee> findAll() {
        logger.info("Retrieving all employees.");
        return employeeRepository.findAllByOrderByLastNameAsc();
    }

    @Override
    public Employee findById(int theId) {
        logger.info("Retrieving employee with id: " + theId);
        return employeeRepository.findById(theId)
                .orElseThrow(() -> new EmployeeNotFoundException("Did not find employee id - " + theId));
    }

    @Override
    @Transactional
    public void save(Employee theEmployee) {
        logger.info("Saving employee: " + theEmployee);
        employeeRepository.save(theEmployee);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        logger.info("Deleting employee with id: " + theId);
        employeeRepository.deleteById(theId);
    }
}

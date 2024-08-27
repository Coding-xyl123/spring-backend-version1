package com.backend.spring.service;


import com.backend.spring.dao.Employee;

import java.util.List;


    public interface EmployeeService {

        List<Employee> findAll();

        Employee findById(int theId);

        void save(Employee theEmployee);

        void deleteById(int theId);

    }

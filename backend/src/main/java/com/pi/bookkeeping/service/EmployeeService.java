package com.pi.bookkeeping.service;

import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.repository.EmployeeRepo;
import com.pi.bookkeeping.service.interfaces.EmployeeInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService implements EmployeeInterface {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee findOne(Long id) {
        return employeeRepo.getOne(id);
    }

    @Override
    public Page<Employee> findAll(Pageable pageable) {
        return employeeRepo.findAll(pageable);
    }

    @Override
    public Employee save(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public Employee update(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public void delete(Long id) {
        employeeRepo.deleteById(id);
    }
}

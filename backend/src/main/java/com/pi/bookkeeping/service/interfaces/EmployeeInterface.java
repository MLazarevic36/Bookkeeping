package com.pi.bookkeeping.service.interfaces;

import com.pi.bookkeeping.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeInterface {

    Employee findOne(Long id);
    Page<Employee> findAll(Pageable pageable);
    Employee save(Employee employee);
    Employee update(Employee employee);
    void delete(Long id);

}

package com.pi.bookkeeping.repository;

import com.pi.bookkeeping.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    Employee getById(Long id);
}

package com.pi.bookkeeping.repository.company;

import com.pi.bookkeeping.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Long>{
    Company getById(Long id);

    List<Company> findAll();
}

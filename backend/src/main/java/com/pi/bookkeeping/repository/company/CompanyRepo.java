package com.pi.bookkeeping.repository.company;

import com.pi.bookkeeping.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Long>{
    Company getById(Long id);
}

package com.pi.bookkeeping.repository;

import com.pi.bookkeeping.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Long>{
    Company getById(Long id);
}

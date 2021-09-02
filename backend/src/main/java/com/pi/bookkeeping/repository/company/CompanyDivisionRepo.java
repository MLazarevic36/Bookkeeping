package com.pi.bookkeeping.repository.company;

import com.pi.bookkeeping.model.company.CompanyDivision;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDivisionRepo extends JpaRepository<CompanyDivision, Long> {
    CompanyDivision getById(Long id);
}

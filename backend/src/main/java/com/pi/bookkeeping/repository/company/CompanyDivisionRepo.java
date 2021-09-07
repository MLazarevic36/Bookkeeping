package com.pi.bookkeeping.repository.company;

import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyDivision;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyDivisionRepo extends JpaRepository<CompanyDivision, Long> {
    CompanyDivision getById(Long id);

    List<CompanyDivision> findAllByCompany(Company company);
}

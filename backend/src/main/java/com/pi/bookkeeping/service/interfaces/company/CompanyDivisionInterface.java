package com.pi.bookkeeping.service.interfaces.company;

import com.pi.bookkeeping.model.company.CompanyDivision;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CompanyDivisionInterface {

    CompanyDivision findOne(Long id);
    Page<CompanyDivision> findAll(Pageable pageable);
    CompanyDivision save(CompanyDivision companyDivision);
    CompanyDivision update(CompanyDivision companyDivision);
    void delete(Long id);

}
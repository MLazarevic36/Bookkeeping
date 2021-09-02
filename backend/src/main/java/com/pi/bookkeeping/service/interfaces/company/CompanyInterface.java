package com.pi.bookkeeping.service.interfaces.company;

import com.pi.bookkeeping.model.company.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CompanyInterface {

    Company findOne(Long id);
    Page<Company> findAll(Pageable pageable);
    Company save(Company company);
    Company update(Company company);
    void delete(Long id);

}

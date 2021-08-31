package com.pi.bookkeeping.service;

import com.pi.bookkeeping.model.Company;
import com.pi.bookkeeping.repository.CompanyRepo;
import com.pi.bookkeeping.service.interfaces.CompanyInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CompanyService implements CompanyInterface {

    @Autowired
    private CompanyRepo companyRepo;

    @Override
    public Company findOne(Long id) {
        return companyRepo.getOne(id);
    }

    @Override
    public Page<Company> findAll(Pageable pageable) {
        return companyRepo.findAll(pageable);
    }

    @Override
    public Company save(Company company) {
        return companyRepo.save(company);
    }

    @Override
    public Company update(Company company) {
        return companyRepo.save(company);
    }

    @Override
    public void delete(Long id) {
        companyRepo.deleteById(id);
    }
}

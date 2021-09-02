package com.pi.bookkeeping.service.company;

import com.pi.bookkeeping.model.company.CompanyDivision;
import com.pi.bookkeeping.repository.company.CompanyDivisionRepo;
import com.pi.bookkeeping.service.interfaces.company.CompanyDivisionInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CompanyDivisionService implements CompanyDivisionInterface {

    @Autowired
    private CompanyDivisionRepo companyDivisionRepo;

    @Override
    public CompanyDivision findOne(Long id) {
        return companyDivisionRepo.getOne(id);
    }

    @Override
    public Page<CompanyDivision> findAll(Pageable pageable) {
        return companyDivisionRepo.findAll(pageable);
    }

    @Override
    public CompanyDivision save(CompanyDivision companyDivision) {
        return companyDivisionRepo.save(companyDivision);
    }

    @Override
    public CompanyDivision update(CompanyDivision companyDivision) {
        return companyDivisionRepo.save(companyDivision);
    }

    @Override
    public void delete(Long id) {
        companyDivisionRepo.deleteById(id);
    }
}

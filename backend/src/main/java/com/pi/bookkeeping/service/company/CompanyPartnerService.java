package com.pi.bookkeeping.service.company;

import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyPartner;
import com.pi.bookkeeping.repository.company.CompanyPartnerRepo;
import com.pi.bookkeeping.service.interfaces.company.CompanyPartnerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyPartnerService implements CompanyPartnerInterface {

    @Autowired
    private CompanyPartnerRepo companyPartnerRepo;

    @Autowired
    private CompanyService companyService;

    @Override
    public CompanyPartner findOne(Long id) {
        return companyPartnerRepo.getOne(id);
    }

    @Override
    public Page<CompanyPartner> findAll(Pageable pageable) {
        return companyPartnerRepo.findAll(pageable);
    }


    public List<CompanyPartner> getAllByCompany(Long id) {
        Company company = companyService.findOne(id);
        return companyPartnerRepo.findAllByCompany(company);
    }

    @Override
    public CompanyPartner save(CompanyPartner companyPartner) {
        return companyPartnerRepo.save(companyPartner);
    }

    @Override
    public CompanyPartner update(CompanyPartner companyPartner) {
        return companyPartnerRepo.save(companyPartner);
    }

    @Override
    public void delete(Long id) {
        companyPartnerRepo.deleteById(id);
    }
}

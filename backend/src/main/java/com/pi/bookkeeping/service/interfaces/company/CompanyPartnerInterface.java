package com.pi.bookkeeping.service.interfaces.company;

import com.pi.bookkeeping.model.company.CompanyPartner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CompanyPartnerInterface {

    CompanyPartner findOne(Long id);
    Page<CompanyPartner> findAll(Pageable pageable);
    CompanyPartner save(CompanyPartner companyPartner);
    CompanyPartner update(CompanyPartner companyPartner);
    void delete(Long id);

}
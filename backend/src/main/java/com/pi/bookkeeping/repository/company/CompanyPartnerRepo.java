package com.pi.bookkeeping.repository.company;

import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyPartner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyPartnerRepo extends JpaRepository<CompanyPartner, Long> {
    CompanyPartner getById(Long id);

    List<CompanyPartner> findAllByCompany(Company company);
}

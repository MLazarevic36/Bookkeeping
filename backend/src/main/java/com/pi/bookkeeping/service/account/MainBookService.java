package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.repository.account.MainBookRepo;
import com.pi.bookkeeping.service.company.CompanyService;
import com.pi.bookkeeping.service.interfaces.account.MainBookInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MainBookService implements MainBookInterface {

    @Autowired
    private MainBookRepo mainBookRepo;

    @Autowired
    private CompanyService companyService;

    @Override
    public MainBook findOne(Long id) {
        return mainBookRepo.getOne(id);
    }

    public MainBook findByCompany(Long id) {
        Company company = companyService.findOne(id);
        return mainBookRepo.getByCompany(company);
    }

    @Override
    public Page<MainBook> findAll(Pageable pageable) {
        return mainBookRepo.findAll(pageable);
    }

    @Override
    public MainBook save(MainBook contoPlan) {
        return mainBookRepo.save(contoPlan);
    }

    @Override
    public MainBook update(MainBook contoPlan) {
        return mainBookRepo.save(contoPlan);
    }

    @Override
    public void delete(Long id) {
        mainBookRepo.deleteById(id);
    }
}

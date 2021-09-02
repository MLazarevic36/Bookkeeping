package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.conto.ContoPlan;
import com.pi.bookkeeping.repository.conto.ContoPlanRepo;
import com.pi.bookkeeping.service.company.CompanyService;
import com.pi.bookkeeping.service.interfaces.conto.ContoPlanInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContoPlanService implements ContoPlanInterface {

    @Autowired
    private ContoPlanRepo contoPlanRepo;

    @Autowired
    private CompanyService companyService;

    @Override
    public ContoPlan findOne(Long id) {
        return contoPlanRepo.getOne(id);
    }

    public ContoPlan findByCompany(Long id) {
        Company company = companyService.findOne(id);
        return contoPlanRepo.getByCompany(company);
    }

    @Override
    public Page<ContoPlan> findAll(Pageable pageable) {
        return contoPlanRepo.findAll(pageable);
    }

    @Override
    public ContoPlan save(ContoPlan contoPlan) {
        return contoPlanRepo.save(contoPlan);
    }

    @Override
    public ContoPlan update(ContoPlan contoPlan) {
        return contoPlanRepo.save(contoPlan);
    }

    @Override
    public void delete(Long id) {
        contoPlanRepo.deleteById(id);
    }
}

package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.*;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import com.pi.bookkeeping.repository.account.AccountRepo;
import com.pi.bookkeeping.service.company.CompanyService;
import com.pi.bookkeeping.service.conto.ContoService;
import com.pi.bookkeeping.service.interfaces.account.AccountInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AccountService implements AccountInterface {

    @Autowired
    private AccountRepo accountRepo;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private AnalyticCardService analyticCardService;

    @Autowired
    private FinancialChangeService financialChangeService;

    @Autowired
    private AccountItemService accountItemService;

    @Override
    public Account findOne(Long id) {
        return accountRepo.getById(id);
    }

    @Override
    public Page<Account> findAll(Pageable pageable) {
        return accountRepo.findAll(pageable);
    }

    public Page<Account> findAllByCompanyPage(Pageable pageable, Long id) {
        Company company = companyService.findOne(id);
        return accountRepo.findAllByCompany(pageable, company);
    }

    @Override
    public Account save(Account account) {
        return accountRepo.save(account);
    }


    @Override
    public Account update(Account account) {

        return accountRepo.save(account);
    }


    public Account credit(Account account) {
        account.setAccountStatus(AccountStatus.CREDITED);

        account.getAccountItems().forEach(accountItem -> financialChangeService.save(accountItem));

        return accountRepo.save(account);
    }

    @Override
    public void delete(Long id) {
        accountRepo.deleteById(id);
    }
}

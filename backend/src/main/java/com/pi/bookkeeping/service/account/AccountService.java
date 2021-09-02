package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.repository.account.AccountRepo;
import com.pi.bookkeeping.service.interfaces.account.AccountInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements AccountInterface {

    @Autowired
    private AccountRepo accountRepo;

    @Override
    public Account findOne(Long id) {
        return accountRepo.getOne(id);
    }

    @Override
    public Page<Account> findAll(Pageable pageable) {
        return accountRepo.findAll(pageable);
    }

    @Override
    public Account save(Account account) {
        return accountRepo.save(account);
    }

    @Override
    public Account update(Account account) {
        return accountRepo.save(account);
    }

    @Override
    public void delete(Long id) {
        accountRepo.deleteById(id);
    }
}

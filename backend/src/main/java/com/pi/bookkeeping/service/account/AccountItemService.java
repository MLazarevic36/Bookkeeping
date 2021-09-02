package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.repository.account.AccountItemRepo;
import com.pi.bookkeeping.service.interfaces.account.AccountItemInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AccountItemService implements AccountItemInterface {

    @Autowired
    private AccountItemRepo accountItemRepo;

    @Override
    public AccountItem findOne(Long id) {
        return accountItemRepo.getOne(id);
    }

    @Override
    public Page<AccountItem> findAll(Pageable pageable) {
        return accountItemRepo.findAll(pageable);
    }

    @Override
    public AccountItem save(AccountItem accountItem) {
        return accountItemRepo.save(accountItem);
    }

    @Override
    public AccountItem update(AccountItem accountItem) {
        return accountItemRepo.save(accountItem);
    }

    @Override
    public void delete(Long id) {
        accountItemRepo.deleteById(id);
    }
}

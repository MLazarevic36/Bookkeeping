package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.repository.account.AccountItemRepo;
import com.pi.bookkeeping.service.conto.ContoService;
import com.pi.bookkeeping.service.interfaces.account.AccountItemInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AccountItemService implements AccountItemInterface {

    @Autowired
    private AccountItemRepo accountItemRepo;

    @Autowired
    private ContoService contoService;

    @Override
    public AccountItem findOne(Long id) {
        return accountItemRepo.getById(id);
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
    @Transactional
    public void delete(Long id) {
        accountItemRepo.deleteAccountItemById(id);
    }

    public void deleteAllByContoId(Long id) {
        Conto conto = contoService.findOne(id);
        List<AccountItem> accountItems = accountItemRepo.findAllByConto(conto);
        accountItems.forEach(item -> accountItemRepo.deleteById(item.getId()));
    }
}

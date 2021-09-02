package com.pi.bookkeeping.service.interfaces.account;

import com.pi.bookkeeping.model.account.AccountItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AccountItemInterface {

    AccountItem findOne(Long id);
    Page<AccountItem> findAll(Pageable pageable);
    AccountItem save(AccountItem accountItem);
    AccountItem update(AccountItem accountItem);
    void delete(Long id);
}

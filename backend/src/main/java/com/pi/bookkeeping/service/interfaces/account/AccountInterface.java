package com.pi.bookkeeping.service.interfaces.account;

import com.pi.bookkeeping.model.account.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AccountInterface {

    Account findOne(Long id);
    Page<Account> findAll(Pageable pageable);
    Account save(Account account);
    Account update(Account account);
    void delete(Long id);

}

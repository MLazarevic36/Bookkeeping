package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.AccountItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountItemRepo extends JpaRepository<AccountItem, Long> {
    AccountItem getById(Long id);
}

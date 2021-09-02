package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepo extends JpaRepository<Account, Long> {
    Account getById(Long id);
}

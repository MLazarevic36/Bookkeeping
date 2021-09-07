package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.conto.Conto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountItemRepo extends JpaRepository<AccountItem, Long> {
    AccountItem getById(Long id);

    List<AccountItem> findAllByConto(Conto conto);
}

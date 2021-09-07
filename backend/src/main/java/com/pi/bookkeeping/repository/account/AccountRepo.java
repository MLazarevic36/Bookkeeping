package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepo extends JpaRepository<Account, Long> {
    Account getById(Long id);

    Page<Account> findAllByCompany (Pageable pageable, Company company);
}

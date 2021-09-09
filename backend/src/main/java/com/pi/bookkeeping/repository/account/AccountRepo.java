package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.account.AccountStatus;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AccountRepo extends JpaRepository<Account, Long> {
    Account getById(Long id);

    @Modifying
    @Query("DELETE FROM Account a WHERE a.id = :aid")
    void deleteAccountById(@Param("aid") Long id);

    Page<Account> findAllByCompany (Pageable pageable, Company company);

    List<Account> findAllByCompanyAndAccountStatus(Company company, AccountStatus accountStatus);
}

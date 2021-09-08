package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.FinancialChange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancialChangeRepo extends JpaRepository<FinancialChange, Long> {

    FinancialChange getById(Long id);

}

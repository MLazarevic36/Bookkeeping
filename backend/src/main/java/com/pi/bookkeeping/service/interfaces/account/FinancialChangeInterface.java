package com.pi.bookkeeping.service.interfaces.account;

import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.account.FinancialChange;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FinancialChangeInterface {

    FinancialChange findOne(Long id);
    Page<FinancialChange> findAll(Pageable pageable);
    FinancialChange save(AccountItem accountItem);
    FinancialChange update(FinancialChange financialChange);
    void delete(Long id);

}
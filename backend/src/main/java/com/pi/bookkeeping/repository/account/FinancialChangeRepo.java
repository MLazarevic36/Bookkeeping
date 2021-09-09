package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.FinancialChange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancialChangeRepo extends JpaRepository<FinancialChange, Long> {

    FinancialChange getById(Long id);

    @Modifying
    @Query("DELETE FROM FinancialChange a WHERE a.accountItemId = :aid")
    void deleteFinancialChangeByAccountItemId(@Param("aid") Long id);


}

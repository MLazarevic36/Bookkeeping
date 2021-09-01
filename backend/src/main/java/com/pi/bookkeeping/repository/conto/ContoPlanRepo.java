package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.Company;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContoPlanRepo extends JpaRepository<ContoPlan, Long> {
    ContoPlan getById(Long id);

    ContoPlan getByCompany(Company company);
}

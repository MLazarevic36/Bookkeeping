package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainBookRepo extends JpaRepository<MainBook, Long> {
    MainBook getById(Long id);

    MainBook getByCompany(Company company);
}

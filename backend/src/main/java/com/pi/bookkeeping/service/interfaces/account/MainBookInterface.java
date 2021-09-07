package com.pi.bookkeeping.service.interfaces.account;

import com.pi.bookkeeping.model.account.MainBook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MainBookInterface {

    MainBook findOne(Long id);
    Page<MainBook> findAll(Pageable pageable);
    MainBook save(MainBook mainBook);
    MainBook update(MainBook mainBook);
    void delete(Long id);
}

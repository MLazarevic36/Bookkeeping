package com.pi.bookkeeping.service.interfaces;

import com.pi.bookkeeping.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserInterface {

    User findOne(Long id);
    Page<User> findAll(Pageable pageable);
    User save(User user);
    User update(User user);
    void delete(Long id);
}

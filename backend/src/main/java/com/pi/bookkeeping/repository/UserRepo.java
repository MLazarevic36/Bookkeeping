package com.pi.bookkeeping.repository;

import com.pi.bookkeeping.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    User getByUsername(String username);
    User getByUsernameAndPassword(String username, String password);
}

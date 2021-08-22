package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.conto.ContoGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContoGroupRepo extends JpaRepository<ContoGroup, Long> {
    ContoGroup getById(Long id);
}

package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.conto.Conto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContoRepo extends JpaRepository<Conto, Long> {
    Conto getById(Long id);
}

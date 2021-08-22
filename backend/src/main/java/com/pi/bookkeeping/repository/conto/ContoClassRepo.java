package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.conto.ContoClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContoClassRepo extends JpaRepository<ContoClass, Long> {
    ContoClass getById(Long id);
}

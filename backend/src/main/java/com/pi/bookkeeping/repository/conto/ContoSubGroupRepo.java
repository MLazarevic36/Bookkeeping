package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.conto.ContoSubGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContoSubGroupRepo extends JpaRepository<ContoSubGroup, Long> {
    ContoSubGroup getById(Long id);
}

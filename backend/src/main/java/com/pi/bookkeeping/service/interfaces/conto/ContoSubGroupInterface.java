package com.pi.bookkeeping.service.interfaces.conto;

import com.pi.bookkeeping.model.conto.ContoGroup;
import com.pi.bookkeeping.model.conto.ContoSubGroup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContoSubGroupInterface {

    ContoSubGroup findOne(Long id);
    Page<ContoSubGroup> findAll(Pageable pageable);
    ContoSubGroup save(ContoSubGroup contoSubGroup);
    ContoSubGroup update(ContoSubGroup contoSubGroup);
    void delete(Long id);
}

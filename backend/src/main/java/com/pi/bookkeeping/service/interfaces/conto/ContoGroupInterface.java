package com.pi.bookkeeping.service.interfaces.conto;

import com.pi.bookkeeping.model.conto.ContoGroup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContoGroupInterface {

    ContoGroup findOne(Long id);
    Page<ContoGroup> findAll(Pageable pageable);
    ContoGroup save(ContoGroup contoGroup);
    ContoGroup update(ContoGroup contoGroup);
    void delete(Long id);

}

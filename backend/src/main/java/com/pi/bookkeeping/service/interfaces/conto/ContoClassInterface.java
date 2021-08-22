package com.pi.bookkeeping.service.interfaces.conto;

import com.pi.bookkeeping.model.conto.ContoClass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContoClassInterface {

    ContoClass findOne(Long id);
    Page<ContoClass> findAll(Pageable pageable);
    ContoClass save(ContoClass contoClass);
    ContoClass update(ContoClass contoClass);
    void delete(Long id);
}

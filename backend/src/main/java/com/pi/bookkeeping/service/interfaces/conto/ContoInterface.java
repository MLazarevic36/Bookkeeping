package com.pi.bookkeeping.service.interfaces.conto;

import com.pi.bookkeeping.model.conto.Conto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContoInterface {

    Conto findOne(Long id);
    Page<Conto> findAll(Pageable pageable);
    Conto save(Conto conto);
    Conto update(Conto conto);
    void delete(Long id);
}

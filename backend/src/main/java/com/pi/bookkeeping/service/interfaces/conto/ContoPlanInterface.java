package com.pi.bookkeeping.service.interfaces.conto;

import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ContoPlanInterface {

    ContoPlan findOne(Long id);
    Page<ContoPlan> findAll(Pageable pageable);
    ContoPlan save(ContoPlan contoPlan);
    ContoPlan update(ContoPlan contoPlan);
    void delete(Long id);
}

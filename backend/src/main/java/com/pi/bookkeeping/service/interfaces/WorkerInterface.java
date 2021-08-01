package com.pi.bookkeeping.service.interfaces;

import com.pi.bookkeeping.model.Worker;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WorkerInterface {

    Worker findOne(Long id);
    Page<Worker> findAll(Pageable pageable);
    Worker save(Worker worker);
    Worker update(Worker worker);
    void delete(Long id);

}

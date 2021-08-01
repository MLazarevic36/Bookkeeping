package com.pi.bookkeeping.service;

import com.pi.bookkeeping.model.Worker;
import com.pi.bookkeeping.repository.WorkerRepo;
import com.pi.bookkeeping.service.interfaces.WorkerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class WorkerService implements WorkerInterface {

    @Autowired
    private WorkerRepo workerRepo;

    @Override
    public Worker findOne(Long id) {
        return workerRepo.getOne(id);
    }

    @Override
    public Page<Worker> findAll(Pageable pageable) {
        return workerRepo.findAll(pageable);
    }

    @Override
    public Worker save(Worker worker) {
        return workerRepo.save(worker);
    }

    @Override
    public Worker update(Worker worker) {
        return workerRepo.save(worker);
    }

    @Override
    public void delete(Long id) {
        workerRepo.deleteById(id);
    }
}

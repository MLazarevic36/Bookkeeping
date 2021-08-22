package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.conto.ContoGroup;
import com.pi.bookkeeping.repository.conto.ContoGroupRepo;
import com.pi.bookkeeping.service.interfaces.conto.ContoGroupInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContoGroupService implements ContoGroupInterface {

    @Autowired
    private ContoGroupRepo contoGroupRepo;

    @Override
    public ContoGroup findOne(Long id) {
        return contoGroupRepo.getOne(id);
    }

    @Override
    public Page<ContoGroup> findAll(Pageable pageable) {
        return contoGroupRepo.findAll(pageable);
    }

    @Override
    public ContoGroup save(ContoGroup contoGroup) {
        return contoGroupRepo.save(contoGroup);
    }

    @Override
    public ContoGroup update(ContoGroup contoGroup) {
        return contoGroupRepo.save(contoGroup);
    }

    @Override
    public void delete(Long id) {
        contoGroupRepo.deleteById(id);
    }
}

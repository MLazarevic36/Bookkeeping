package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoSubGroup;
import com.pi.bookkeeping.repository.conto.ContoRepo;
import com.pi.bookkeeping.repository.conto.ContoSubGroupRepo;
import com.pi.bookkeeping.service.interfaces.conto.ContoInterface;
import com.pi.bookkeeping.service.interfaces.conto.ContoSubGroupInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContoSubGroupService implements ContoSubGroupInterface {

    @Autowired
    private ContoSubGroupRepo contoSubGroupRepo;

    @Override
    public ContoSubGroup findOne(Long id) {
        return contoSubGroupRepo.getOne(id);
    }

    @Override
    public Page<ContoSubGroup> findAll(Pageable pageable) {
        return contoSubGroupRepo.findAll(pageable);
    }

    @Override
    public ContoSubGroup save(ContoSubGroup contoSubGroup) {
        return contoSubGroupRepo.save(contoSubGroup);
    }

    @Override
    public ContoSubGroup update(ContoSubGroup contoSubGroup) {
        return contoSubGroupRepo.save(contoSubGroup);
    }

    @Override
    public void delete(Long id) {
        contoSubGroupRepo.deleteById(id);
    }
}

package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.conto.ContoClass;
import com.pi.bookkeeping.repository.conto.ContoClassRepo;
import com.pi.bookkeeping.service.interfaces.conto.ContoClassInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContoClassService implements ContoClassInterface {

    @Autowired
    private ContoClassRepo contoClassRepo;

    @Override
    public ContoClass findOne(Long id) {
        return contoClassRepo.getOne(id);
    }

    @Override
    public Page<ContoClass> findAll(Pageable pageable) {
        return contoClassRepo.findAll(pageable);
    }

    @Override
    public ContoClass save(ContoClass contoClass) {
        return contoClassRepo.save(contoClass);
    }

    @Override
    public ContoClass update(ContoClass contoClass) {
        return contoClassRepo.save(contoClass);
    }

    @Override
    public void delete(Long id) {
        contoClassRepo.deleteById(id);
    }
}

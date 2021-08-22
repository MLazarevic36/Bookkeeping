package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.repository.conto.ContoRepo;
import com.pi.bookkeeping.service.interfaces.conto.ContoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContoService implements ContoInterface {

    @Autowired
    private ContoRepo contoRepo;

    @Override
    public Conto findOne(Long id) {
        return contoRepo.getOne(id);
    }

    @Override
    public Page<Conto> findAll(Pageable pageable) {
        return contoRepo.findAll(pageable);
    }

    @Override
    public Conto save(Conto conto) {
        return contoRepo.save(conto);
    }

    @Override
    public Conto update(Conto conto) {
        return contoRepo.save(conto);
    }

    @Override
    public void delete(Long id) {
        contoRepo.deleteById(id);
    }
}

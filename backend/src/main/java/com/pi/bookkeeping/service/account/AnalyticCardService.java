package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.repository.account.AnalyticCardRepo;
import com.pi.bookkeeping.service.conto.ContoService;
import com.pi.bookkeeping.service.interfaces.account.AnalyticCardInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AnalyticCardService implements AnalyticCardInterface {

    @Autowired
    private AnalyticCardRepo analyticCardRepo;

    @Autowired
    private ContoService contoService;

    @Autowired
    private MainBookService mainBookService;

    @Override
    public AnalyticCard findOne(Long id) {
        return analyticCardRepo.getOne(id);
    }

    public AnalyticCard findByConto(Long id) {
        Conto conto = contoService.findOne(id);
        return analyticCardRepo.getByConto(conto);
    }

    @Override
    public Page<AnalyticCard> findAll(Pageable pageable) {
        return analyticCardRepo.findAll(pageable);
    }

    public Page<AnalyticCard> findAllByMainBook(Pageable pageable, Long id) {
        MainBook mainBook = mainBookService.findByCompany(id);
        return analyticCardRepo.findAllByMainBook(pageable, mainBook);
    }

    @Override
    public AnalyticCard save(AnalyticCard account) {
        return analyticCardRepo.save(account);
    }

    @Override
    public AnalyticCard update(AnalyticCard account) {
        return analyticCardRepo.save(account);
    }

    @Override
    public void delete(Long id) {
        analyticCardRepo.deleteById(id);
    }
}

package com.pi.bookkeeping.service.conto;

import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import com.pi.bookkeeping.model.conto.ContoType;
import com.pi.bookkeeping.repository.conto.ContoRepo;
import com.pi.bookkeeping.service.account.AccountItemService;
import com.pi.bookkeeping.service.account.AnalyticCardService;
import com.pi.bookkeeping.service.account.MainBookService;
import com.pi.bookkeeping.service.interfaces.conto.ContoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContoService implements ContoInterface {

    @Autowired
    private ContoRepo contoRepo;

    @Autowired
    private ContoPlanService contoPlanService;

    @Autowired
    private MainBookService mainBookService;

    @Autowired
    private AnalyticCardService analyticCardService;

    @Autowired
    private AccountItemService accountItemService;

    @Override
    public Conto findOne(Long id) {
        return contoRepo.getOne(id);
    }

    @Override
    public Page<Conto> findAll(Pageable pageable) {
        return contoRepo.findAll(pageable);
    }

    public Page<Conto> findAllByCompanyPage(Pageable pageable, Long id) {
        ContoPlan contoPlan = contoPlanService.findByCompany(id);
        return contoRepo.findAllByContoPlan(pageable, contoPlan);
    }

    public List<Conto> findAllByCompanyList(Long id) {
        ContoPlan contoPlan = contoPlanService.findByCompany(id);
        return contoRepo.findAllByContoPlan(contoPlan);
    }

    @Override
    public Conto save(Conto conto) {

        if(conto.getType() == ContoType.ANALYTIC) {
            MainBook mainBook =  mainBookService.findByCompany(conto.getContoPlan().getCompany().getId());

            AnalyticCard analyticCard = new AnalyticCard();
            analyticCard.setConto(conto);
            analyticCard.setMainBook(mainBook);
            analyticCard.setOwesAmountTotal(0L);
            analyticCard.setRequiresAmountTotal(0L);
            analyticCard.setSaldo(0L);

            analyticCardService.save(analyticCard);
        }

        return contoRepo.save(conto);
    }

    @Override
    public Conto update(Conto conto) {
        return contoRepo.save(conto);
    }

    @Override
    public void delete(Long id) {
        accountItemService.deleteAllByContoId(id);
        AnalyticCard analyticCard = analyticCardService.findByConto(id);
        analyticCardService.delete(analyticCard.getId());

        contoRepo.deleteById(id);
    }
}

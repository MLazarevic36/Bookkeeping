package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.FinancialChange;
import com.pi.bookkeeping.model.account.FinancialChangeDirection;
import com.pi.bookkeeping.repository.account.FinancialChangeRepo;
import com.pi.bookkeeping.service.interfaces.account.FinancialChangeInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class FinancialChangeService implements FinancialChangeInterface {

    @Autowired
    private FinancialChangeRepo financialChangeRepo;

    @Autowired
    private AnalyticCardService analyticCardService;

    @Override
    public FinancialChange findOne(Long id) {
        return financialChangeRepo.getOne(id);
    }

    @Override
    public Page<FinancialChange> findAll(Pageable pageable) {
        return financialChangeRepo.findAll(pageable);
    }

    @Override
    public FinancialChange save(AccountItem accountItem) {

        AnalyticCard analyticCard = analyticCardService.findByConto(accountItem.getConto().getId());

        FinancialChange financialChange = new FinancialChange();
        financialChange.setDescription(accountItem.getDescription());
        financialChange.setAnalyticCard(analyticCard);
        if(accountItem.getOwesAmount() > 0) {
            financialChange.setFinancialChangeDirection(FinancialChangeDirection.NEGATIVE);
            financialChange.setAmount(accountItem.getOwesAmount());
        }else{
            financialChange.setFinancialChangeDirection(FinancialChangeDirection.POSITIVE);
            financialChange.setAmount(accountItem.getRequiresAmount());
        }
        financialChange.setDate(accountItem.getDocumentDate());
        financialChange.setAccountItemId(accountItem.getId());

        return financialChangeRepo.save(financialChange);

    }

    @Override
    public FinancialChange update(FinancialChange financialChange) {
        return financialChangeRepo.save(financialChange);
    }

    @Override
    public void delete(Long id) {
        financialChangeRepo.deleteById(id);
    }

    @Transactional
    public void deleteByAccountItem(Long id) {
        financialChangeRepo.deleteFinancialChangeByAccountItemId(id);
    }

}

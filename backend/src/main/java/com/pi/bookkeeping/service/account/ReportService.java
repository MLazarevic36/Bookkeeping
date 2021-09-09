package com.pi.bookkeeping.service.account;

import com.pi.bookkeeping.dto.report.AnalyticCardItem;
import com.pi.bookkeeping.dto.report.AnalyticCardResponse;
import com.pi.bookkeeping.dto.report.ReportDTO;
import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.FinancialChange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    private AnalyticCardService analyticCardService;

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountItemService accountItemService;

    public void convertToItem(FinancialChange financialChange, List<AnalyticCardItem> items){
        AccountItem accountItem = accountItemService.findOne(financialChange.getAccountItemId());
        Account account = accountService.findOne(accountItem.getAccount().getId());
        AnalyticCardItem analyticCardItem = new AnalyticCardItem();
        analyticCardItem.setId(accountItem.getId());
        analyticCardItem.setAccountDate(account.getAccountDate());
        analyticCardItem.setAccountType(account.getAccountType());
        analyticCardItem.setDocumentDate(accountItem.getDocumentDate());
        analyticCardItem.setDocumentNumber(accountItem.getDocumentNumber());
        analyticCardItem.setOwes(accountItem.getOwesAmount());
        analyticCardItem.setRequires(accountItem.getRequiresAmount());
        analyticCardItem.setAccountId(account.getId());
        analyticCardItem.setSaldo(accountItem.getOwesAmount() - accountItem.getRequiresAmount());
        items.add(analyticCardItem);
    }

    public AnalyticCardResponse generateAnalyticCardResponse(ReportDTO reportDTO) {
        AnalyticCard analyticCard = analyticCardService.findByConto(reportDTO.getContoId());

        AnalyticCardResponse analyticCardResponse = new AnalyticCardResponse();
        analyticCardResponse.setConto(analyticCard.getConto().getId());
        List<AnalyticCardItem> items = new ArrayList<>();
        analyticCard.getFinancialChanges().forEach(item -> convertToItem(item, items));
        analyticCardResponse.setItems(items);
        return analyticCardResponse;
    }

}

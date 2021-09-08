package com.pi.bookkeeping.service.interfaces.account;

import com.pi.bookkeeping.model.account.AnalyticCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AnalyticCardInterface {

    AnalyticCard findOne(Long id);
    Page<AnalyticCard> findAll(Pageable pageable);
    AnalyticCard save(AnalyticCard analyticCard);
    AnalyticCard update(AnalyticCard analyticCard);
    void delete(Long id);

}

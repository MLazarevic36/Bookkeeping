package com.pi.bookkeeping.repository.account;

import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.model.conto.Conto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnalyticCardRepo extends JpaRepository<AnalyticCard, Long> {
    AnalyticCard getById(Long id);

    AnalyticCard getByConto(Conto conto);

    Page<AnalyticCard> findAllByMainBook(Pageable pageable, MainBook mainBook);
}

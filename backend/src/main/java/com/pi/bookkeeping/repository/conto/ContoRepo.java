package com.pi.bookkeeping.repository.conto;

import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContoRepo extends JpaRepository<Conto, Long> {

    Conto getById(Long id);

    Page<Conto> findAllByContoPlan (Pageable pageable, ContoPlan contoPlan);

    List<Conto> findAllByContoPlan (ContoPlan contoPlan);
}

package com.pi.bookkeeping.model.account;

import com.pi.bookkeeping.model.conto.Conto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "analytic_cards")
public class AnalyticCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "conto_id", referencedColumnName = "id")
    private Conto conto;

    @OneToMany(mappedBy = "analyticCard", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, orphanRemoval = true)
    @Column
    private List<FinancialChange> financialChanges;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="main_book_id")
    private MainBook mainBook;

    @Column(name = "owes_amount_total")
    private Long owesAmountTotal;

    @Column(name = "requires_amount_total")
    private Long requiresAmountTotal;

    @Column(name = "saldo")
    private Long saldo;
}

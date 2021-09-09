package com.pi.bookkeeping.model.account;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "financial_changes")
public class FinancialChange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="analytic_card_id")
    private AnalyticCard analyticCard;

    @Column(name = "date")
    private Date date;

    @Enumerated(EnumType.STRING)
    @Column(name = "direction")
    private FinancialChangeDirection financialChangeDirection;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "account_item_id", nullable = false)
    private Long accountItemId;


}

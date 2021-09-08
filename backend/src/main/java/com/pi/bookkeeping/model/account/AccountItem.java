package com.pi.bookkeeping.model.account;

import com.pi.bookkeeping.model.company.CompanyPartner;
import com.pi.bookkeeping.model.conto.Conto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "account_items")
@Getter
@Setter
@NoArgsConstructor
public class AccountItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="conto_id")
    private Conto conto;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="company_partner_id")
    private CompanyPartner companyPartner;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "owes_amount", nullable = false)
    private Long owesAmount;

    @Column(name = "requires_amount", nullable = false)
    private Long requiresAmount;

    @Column(name = "document_number", nullable = false)
    private Long documentNumber;

    @Column(name = "document_date")
    private Date documentDate;

    @Column(name = "currency_date")
    private Date currencyDate;

    @Column(name = "saldo")
    private Long saldo;



}

package com.pi.bookkeeping.model.account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.model.company.Company;
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

    @Column(name = "conto_label", nullable = false)
    private String contoLabel;

    @Column(name = "conto_description", nullable = false)
    private String contoDescription;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="account_id")
    @JsonIgnore
    private Account account;

    @Column(name = "partner", nullable = false)
    private String partner;

    @Column(name = "owes_amount", nullable = false)
    private Long owesAmount;

    @Column(name = "requires_amount", nullable = false)
    private Long requiresAmount;

    @Column(name = "document_number", nullable = false)
    private String document_number;

    @Column(name = "document_date")
    private Date documentDate;

    @Column(name = "currency_date")
    private Date currencyDate;



}

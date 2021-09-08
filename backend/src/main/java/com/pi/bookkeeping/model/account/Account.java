package com.pi.bookkeeping.model.account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyDivision;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "accounts")
@Getter
@Setter
@NoArgsConstructor
public class Account implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="company_division_id")
    private CompanyDivision companyDivision;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="company_id")
    private Company company;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_status", nullable = false)
    private AccountStatus accountStatus;

    @Column(name = "account_date")
    private Date accountDate;

    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, orphanRemoval = true)
    @Column
    private List<AccountItem> accountItems;

    @Column(name = "owes_amount_total")
    private Long owesAmountTotal;

    @Column(name = "requires_amount_total")
    private Long requiresAmountTotal;

    @Column(name = "saldo")
    private Long saldo;

}

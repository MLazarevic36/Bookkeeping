package com.pi.bookkeeping.model.company;

import com.pi.bookkeeping.model.account.AccountItem;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "company_partners")
public class CompanyPartner implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="company_id")
    private Company company;

    @OneToMany(mappedBy = "companyPartner", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column
    private List<AccountItem> accountItems;
}
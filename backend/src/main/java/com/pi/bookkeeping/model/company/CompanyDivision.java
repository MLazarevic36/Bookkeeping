package com.pi.bookkeeping.model.company;

import com.pi.bookkeeping.model.account.Account;
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
@Table(name = "company_divisions")
public class CompanyDivision implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="company_id")
    private Company company;

    @OneToMany(mappedBy = "companyDivision", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Column
    private List<Account> accounts;

}
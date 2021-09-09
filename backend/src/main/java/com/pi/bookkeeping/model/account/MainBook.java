package com.pi.bookkeeping.model.account;

import com.pi.bookkeeping.model.company.Company;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "main_books")
@Getter
@Setter
@NoArgsConstructor
public class MainBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    private Company company;

    @OneToMany(mappedBy = "mainBook", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<AnalyticCard> analyticCards;

}

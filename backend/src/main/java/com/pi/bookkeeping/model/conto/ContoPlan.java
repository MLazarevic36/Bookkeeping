package com.pi.bookkeeping.model.conto;

import com.pi.bookkeeping.model.company.Company;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "conto_plans")
@Getter
@Setter
@NoArgsConstructor
public class ContoPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    private Company company;

    @OneToMany(mappedBy = "contoPlan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Conto> contos;

}

package com.pi.bookkeeping.model.conto;

import com.pi.bookkeeping.model.Company;
import com.pi.bookkeeping.model.conto.ContoGroup;
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
    @Column(name = "conto_plan_id", unique = true, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="company_id")
    private Company company;

    @OneToMany(mappedBy = "contoPlan", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Conto> contos;

}

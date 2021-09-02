package com.pi.bookkeeping.model.company;

import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.model.conto.ContoPlan;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "companies")
public class Company implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Column
    @Fetch(value = FetchMode.SUBSELECT)
    private List<Employee> employees;

    @OneToOne(mappedBy = "company")
    private ContoPlan contoPlan;

    @OneToMany(mappedBy = "company", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Column
    @Fetch(value = FetchMode.SUBSELECT)
    private List<CompanyDivision> companyDivisions;

}

package com.pi.bookkeeping.model.conto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "contos")
@Getter
@Setter
@NoArgsConstructor
public class Conto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "conto_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "label", nullable = false)
    private String label;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "type", nullable = false)
    private String type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="conto_plan_id")
    private ContoPlan contoPlan;


}

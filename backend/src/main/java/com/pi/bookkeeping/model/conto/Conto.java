package com.pi.bookkeeping.model.conto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "contos")
@Getter
@Setter
@NoArgsConstructor
public class Conto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "label", nullable = false)
    private String label;

    @Column(name = "description", nullable = false)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ContoStatus status;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private ContoType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="conto_plan_id")
    private ContoPlan contoPlan;


}

package com.pi.bookkeeping.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "conto_classes")
@Getter
@Setter
@NoArgsConstructor
public class ContoClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "conto_class_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "class_label", nullable = false)
    private String classLabel;

    @Column(name = "class_name", nullable = false)
    private String className;

    @OneToMany(mappedBy = "contoClass", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ContoGroup> contoGroups;



}

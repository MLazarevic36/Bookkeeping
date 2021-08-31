package com.pi.bookkeeping.model.conto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.EqualsAndHashCode;
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
    private Long id;

    @Column(name = "class_label", nullable = false)
    private String classLabel;

    @Column(name = "class_name", nullable = false)
    private String className;

    @OneToMany(mappedBy = "contoClass", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Column
    private List<ContoGroup> contoGroups;



}

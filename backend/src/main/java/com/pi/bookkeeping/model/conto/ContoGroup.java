package com.pi.bookkeeping.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "conto_groups")
@Getter
@Setter
@NoArgsConstructor
public class ContoGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "conto_group_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "group_label", nullable = false)
    private String groupLabel;

    @Column(name = "group_name", nullable = false)
    private String groupName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="conto_class_id", referencedColumnName="conto_class_id")
    private ContoClass contoClass;

    @OneToMany(mappedBy = "contoGroup", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ContoSubGroup> contoSubGroups;
}

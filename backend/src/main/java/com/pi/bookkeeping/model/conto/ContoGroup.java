package com.pi.bookkeeping.model.conto;

import com.fasterxml.jackson.annotation.*;
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
    private Long id;

    @Column(name = "group_label", nullable = false)
    private String groupLabel;

    @Column(name = "group_name", nullable = false)
    private String groupName;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="conto_class_id")
    @JsonIgnore
    private ContoClass contoClass;

    @OneToMany(mappedBy = "contoGroup", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Column
    @JsonManagedReference
    private List<ContoSubGroup> contoSubGroups;
}

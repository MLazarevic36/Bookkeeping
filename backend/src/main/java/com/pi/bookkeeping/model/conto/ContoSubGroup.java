package com.pi.bookkeeping.model.conto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "conto_sub_groups")
@Getter
@Setter
@NoArgsConstructor
public class ContoSubGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sub_group_label", nullable = false)
    private String subGroupLabel;

    @Column(name = "sub_group_name", nullable = false)
    private String subGroupName;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="conto_group_id")
    @JsonIgnore
    private ContoGroup contoGroup;

}

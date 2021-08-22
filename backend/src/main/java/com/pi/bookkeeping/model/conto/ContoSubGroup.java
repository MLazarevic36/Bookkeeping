package com.pi.bookkeeping.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "conto_sub_groups")
@Getter
@Setter
@NoArgsConstructor
public class ContoSubGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "conto_sub_group_id", unique = true, nullable = false)
    private Long id;

    @Column(name = "sub_group_label", nullable = false)
    private String subGroupLabel;

    @Column(name = "sub_group_name", nullable = false)
    private String subGroupName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="conto_group_id")
    private ContoGroup contoGroup;

}

package com.pi.bookkeeping.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "workers")
public class Worker implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "jmbg", nullable = false)
    private int jmbg;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "userId", nullable = false)
    private int userId;

    @Column(name = "companyId", nullable = false)
    private int companyId;




}

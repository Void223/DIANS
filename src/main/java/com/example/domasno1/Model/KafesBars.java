package com.example.domasno1.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "kafesbars")
public class KafesBars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String name;
    private float coordinate0;
    private float coordinate1;
    @ManyToMany
    private List<Cocktails> cocktailsList;

}

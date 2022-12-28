package com.example.domasno1.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "kafesbars")
public class KafesBars {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double coordinate0;
    private double coordinate1;
    private String name;
    private String type;

    @ManyToMany
    private List<Cocktails> cocktailsList;

    public List<Cocktails> getCocktailsList() {
        return cocktailsList;
    }
}

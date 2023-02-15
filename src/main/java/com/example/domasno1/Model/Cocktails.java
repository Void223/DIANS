package com.example.domasno1.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cocktails")
public class Cocktails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String ingredients;
    private String price;

    @ManyToMany
    private List<KafesBars> kafesBarsList;

    public List<KafesBars> getKafesBarsList() {
        return kafesBarsList;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getPrice() {
        return price;
    }
}

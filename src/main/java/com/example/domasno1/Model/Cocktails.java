package com.example.domasno1.Model;

import javax.persistence.*;

@Entity
@Table(name = "cockatils")
public class Cocktails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String ingredients;
    private String price;
}

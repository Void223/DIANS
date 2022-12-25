package com.example.domasno1.Service;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;

import java.util.List;

public interface KafesBarsService {
    List<KafesBars> listAll();
    List<Cocktails> availableCocktails(Long id);
}

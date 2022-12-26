package com.example.domasno1.Service;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;

import java.util.List;

public interface CocktailsService {
    List<Cocktails> listAll();
    List<KafesBars> availableAt();
    List<Cocktails> containingIngredients(String text);
}

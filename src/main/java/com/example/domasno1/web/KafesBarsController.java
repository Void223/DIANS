package com.example.domasno1.web;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;
import com.example.domasno1.Service.CocktailsService;
import com.example.domasno1.Service.KafesBarsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class KafesBarsController {

    private final CocktailsService cocktailsService;
    private final KafesBarsService kafesBarsService;

    public KafesBarsController(CocktailsService cocktailsService, KafesBarsService kafesBarsService){
        this.cocktailsService = cocktailsService;
        this.kafesBarsService = kafesBarsService;
    }

    @GetMapping({"/kafebars"})
    public List<KafesBars> showKafeBars(){
        List<KafesBars> kafesBarsList;
        kafesBarsList = kafesBarsService.listAll();
        return kafesBarsList;
    }

    @GetMapping({"/cocktails"})
    public List<Cocktails> showCocktails(@RequestParam(required = false) String ingredients){
        List<Cocktails> cocktailsList;
        if(ingredients==null) {
            cocktailsList = cocktailsService.listAll();
        }
        else{
            cocktailsList = cocktailsService.containingIngredients(ingredients);
        }
        return cocktailsList;
    }
}

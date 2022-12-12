package com.example.domasno1.web;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;
import com.example.domasno1.Service.CocktailsService;
import com.example.domasno1.Service.KafesBarsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class KafesBarsController {

    private final CocktailsService cocktailsService;
    private final KafesBarsService kafesBarsService;

    public KafesBarsController(CocktailsService cocktailsService, KafesBarsService kafesBarsService){
        this.cocktailsService = cocktailsService;
        this.kafesBarsService = kafesBarsService;
    }

    @GetMapping({"/kafebars"})
    public String showKafeBars(){
        List<KafesBars> kafesBarsList;
        kafesBarsList = kafesBarsService.listAll();

    }

    @GetMapping({"/Cocktails"})
    public String showCocktails(){
        List<Cocktails> cocktailsList;
        cocktailsList = cocktailsService.listAll();
    }
}

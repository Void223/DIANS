package com.example.domasno1.web;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;
import com.example.domasno1.Service.CocktailsService;
import com.example.domasno1.Service.KafesBarsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//

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

    @GetMapping({"/{id}/cocktails"})
    public List<Cocktails> listCocktails(@PathVariable Long id){
        List<Cocktails> cocktailsList;
        cocktailsList = kafesBarsService.availableCocktails(id);
        return cocktailsList;
    }

    @GetMapping({"/cocktails"})
    public List<Cocktails> showCocktails(@RequestParam(required = false) String name){
        List<Cocktails> cocktailsList;
        if(name==null) {
            cocktailsList = cocktailsService.listAll();
        }
        else{
            cocktailsList = cocktailsService.findCocktailByName(name);
        }
        return cocktailsList;
    }

    @GetMapping({"/{id}/kafebars"})
    public List<KafesBars> listKafeBars(@PathVariable Long id){
        List<KafesBars> kafesBarsList;
        kafesBarsList = cocktailsService.availableAt(id);
        return kafesBarsList;
    }

    @GetMapping({"/ingredients"})
    public List<Cocktails> searchByIngredients(@RequestParam(required = false) String ingredients){
        List<Cocktails> cocktailsList;
        if(ingredients==null){
            cocktailsList = cocktailsService.listAll();
        }
        else{
            cocktailsList = cocktailsService.containingIngredients(ingredients);
        }
        return cocktailsList;
    }
}

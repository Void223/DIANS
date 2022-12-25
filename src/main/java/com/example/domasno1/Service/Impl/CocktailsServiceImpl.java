package com.example.domasno1.Service.Impl;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;
import com.example.domasno1.Repo.CocktailsRepo;
import com.example.domasno1.Service.CocktailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CocktailsServiceImpl implements CocktailsService {

    private final CocktailsRepo cocktailsRepo;

    public CocktailsServiceImpl(CocktailsRepo cocktailsRepo){
        this.cocktailsRepo = cocktailsRepo;
    }

    @Override
    public List<Cocktails> listAll() {
        return cocktailsRepo.findAll();
    }

    @Override
    public List<KafesBars> availableAt() {
        return null;
    }
}

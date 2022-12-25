package com.example.domasno1.Service.Impl;

import com.example.domasno1.Model.Cocktails;
import com.example.domasno1.Model.KafesBars;
import com.example.domasno1.Repo.KafesBarsRepo;
import com.example.domasno1.Service.KafesBarsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KafeBarsServiceImpl implements KafesBarsService {

    private final KafesBarsRepo kafesBarsRepo;

    public KafeBarsServiceImpl(KafesBarsRepo kafesBarsRepo){
        this.kafesBarsRepo = kafesBarsRepo;
    }

    @Override
    public List<KafesBars> listAll() {
        return kafesBarsRepo.findAll();
    }

    @Override
    public List<Cocktails> availableCocktails(Long id) {
        return kafesBarsRepo.findById(id).get().getCocktailsList();
    }
}

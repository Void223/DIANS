package com.example.domasno1.Repo;

import com.example.domasno1.Model.Cocktails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CocktailsRepo extends JpaRepository<Cocktails, Long> {
    List<Cocktails> findByIngredientsContaining(String text);
}

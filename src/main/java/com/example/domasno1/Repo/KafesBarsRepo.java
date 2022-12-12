package com.example.domasno1.Repo;

import com.example.domasno1.Model.KafesBars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KafesBarsRepo extends JpaRepository<KafesBars, Long> {
}

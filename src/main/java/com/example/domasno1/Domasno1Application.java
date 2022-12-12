package com.example.domasno1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@SpringBootApplication
public class Domasno1Application {


    public static void main(String[] args) throws FileNotFoundException {
    SpringApplication.run(Domasno1Application.class, args);
//        ClassLoader loader = Domasno1Application.class.getClassLoader();
//        Scanner sc = new Scanner(new File(loader.getResource("Cocktail_database.csv").getFile()));
//        Scanner scan = new Scanner(new File(loader.getResource("BarsAndCafes_database.csv").getFile()));
//        Pipe<String> pipe = new Pipe<>();
//        FilterByType_Bar filter = new FilterByType_Bar();
//        pipe.addFilter(filter);
//
//        while (scan.hasNextLine()) {
//            String line = scan.nextLine();
//            if (!pipe.runFilter(line).equals(""))
//                System.out.println(pipe.runFilter(line));
//        }
//        while (sc.hasNextLine()) {
//            System.out.println(sc.nextLine());
//        }
//    }
    }
}

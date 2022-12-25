package com.example.domasno1;

public class FilterByType_Bar implements  Filter<String>{
    @Override
    public String execute(String input) {
        String[] split = input.split(",");
        if(split[1].equals("bar")){
            return input;
        }
        return "";
    }
}

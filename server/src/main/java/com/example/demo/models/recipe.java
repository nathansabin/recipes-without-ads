package com.example.demo.models;

import java.util.List;

public class recipe {
    private String title;
    private List<String> ingridents;
    private String directions;

    public recipe(String title, List<String> ingridents, String directions ) {
        this.title = title;
        this.ingridents = ingridents;
        this.directions = directions;
    }

    public recipe(){}

    public String getTitle() {
        return this.title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getIngridents() {
        return this.ingridents;
    }

    public void setIngridents(List<String> ingridents) {
        this.ingridents = ingridents;
    }

    public String getDirections() {
        return this.directions;
    }

    public void setDirections(String directions) {
        this.directions = directions;
    }

    @Override
    public String toString() {
        return "recipe{" +
                "title='" + title + '\'' +
                ", ingridents=" + ingridents +
                ", directions='" + directions + '\'' +
                '}';
    }
}

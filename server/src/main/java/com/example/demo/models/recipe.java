package com.example.demo.models;

import java.util.List;

public class recipe {

    private String title;
    private List<String> ingredients;
    private List<String> directions;
    private String url;
    private String image;

    public recipe(String title, List<String> ingridents, List<String> directions, String url, String image) {
        this.title = title;
        this.ingredients = ingridents;
        this.directions = directions;
        this.url = url;
        this.image = image;
    }

    public recipe(){}

    public String getTitle() {
        return this.title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getIngredients() {
        return this.ingredients;
    }

    public void setIngridents(List<String> ingridents) {
        this.ingredients = ingridents;
    }

    public List<String> getDirections() {
        return this.directions;
    }

    public void setDirections(List<String> directions) {
        this.directions = directions;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "recipe{" +
                "title='" + title + '\'' +
                ", ingridents=" + ingredients +
                ", directions='" + directions + '\'' +
                ", url='" + url + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}

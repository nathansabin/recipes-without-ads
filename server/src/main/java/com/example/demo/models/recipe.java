package com.example.demo.models;

import java.util.List;

public class recipe {

    private String title;
    private List<String> ingridents;
    private String directions;
    private String url;
    private String image;

    public recipe(String title, List<String> ingridents, String directions, String url, String image) {
        this.title = title;
        this.ingridents = ingridents;
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
                ", ingridents=" + ingridents +
                ", directions='" + directions + '\'' +
                ", url='" + url + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}

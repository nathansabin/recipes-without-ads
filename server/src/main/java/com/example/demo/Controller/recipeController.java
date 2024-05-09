package com.example.demo.Controller;

import com.example.demo.models.recipe;
import org.jsoup.*;
import org.jsoup.helper.*;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class recipeController {

    private String frontendURL;

    @GetMapping("/api/recipe/{food}")
    public List<recipe> getRecipes(@PathVariable("food") String food) {
        try {
            List<recipe> recipeFormated = new ArrayList<recipe>();

            String url = "https://www.allrecipes.com/search?q=" + food;
            Document con = Jsoup.connect(url).userAgent("Mozilla/5.0").timeout(5000).get();

            Elements webpage = con.select(".comp.mntl-card-list-items");

            for (Element recipePage : webpage) {
                recipe rec = new recipe();
                String site = recipePage.absUrl("href");
                String name = recipePage.select(".card__title-text").text();
                String image = recipePage.select(".card__img").first().absUrl("data-src");

                rec.setUrl(site);
                rec.setTitle(name);
                rec.setImage(image);

                recipeFormated.add(rec);
            }

            if (recipeFormated.size() == 0) {
                return null;
            }
            return recipeFormated;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @PostMapping("/api/recipe/")
    public recipe getRecipe(@RequestBody recipe food) {
        try {
            List<String> ingredients = new ArrayList<>();
            List<String> directions = new ArrayList<>();

            Document con = Jsoup.connect(food.getUrl()).userAgent("Mozilla/5.0").timeout(5000).get();

            Elements ingredientHtml = con.select(".mntl-structured-ingredients__list-item");

            for (Element ele : ingredientHtml) {
                String ingredient = ele.select("li > p > span[data-ingredient-quantity=true]").text() + " ";
                ingredient = ingredient + ele.select("li > p > span[data-ingredient-unit=true]").text() + " ";
                ingredient = ingredient + ele.select("li > p > span[data-ingredient-name=true]").text() + " ";

                ingredients.add(ingredient);
            }

            Elements directionsHtml = con.select(".comp.mntl-sc-block.mntl-sc-block-html");

            for (Element ele : directionsHtml) {
                directions.add(ele.text());
            }

            food.setIngridents(ingredients);
            food.setDirections(directions);

            return food;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

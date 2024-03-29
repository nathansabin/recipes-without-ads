package com.example.demo.Controller;

import com.example.demo.models.recipe;
import org.jsoup.*;
import org.jsoup.helper.*;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class recipeController {
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
}

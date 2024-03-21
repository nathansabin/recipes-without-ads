package com.example.demo.Controller;

import com.example.demo.models.recipe;
import org.jsoup.*;
import org.jsoup.helper.*;
import org.jsoup.nodes.*;
import org.jsoup.select.Elements;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class recipeController {
    @GetMapping("/api/recipe/{food}")
    public List<String> getRecipes(@PathVariable("food") String food) {
        try {
            List<String> recipeUrls = new ArrayList<String>();

            String url = "https://www.allrecipes.com/search?q=" + food;
            Document con = Jsoup.connect(url).userAgent("Mozilla/5.0").timeout(5000).get();

            Elements webpage = con.select(".comp");

            for (Element recipePage : webpage) {
                String site = recipePage.absUrl("href");
                if (site != "") {
                    recipeUrls.add(site);
                }
            }

            if (recipeUrls.size() == 0) {
                return null;
            }
            return recipeUrls;
        } catch (Exception e) {
            e.printStackTrace();
            // Handle any exceptions that might occur during the HTTP request
        }

        return null;
    }
}

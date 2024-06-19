package com.example.demo.Utils;

import io.github.cdimascio.dotenv.Dotenv;

public class envWorker {
    private static Dotenv grabEnv() {
        return Dotenv.configure()
                .directory("/assets")
                .filename("env")
                .load();
    }

    public static String getURL() {
        Dotenv dotenv = grabEnv();
        return grabEnv().get("FRONT_END_URL");
    }
}

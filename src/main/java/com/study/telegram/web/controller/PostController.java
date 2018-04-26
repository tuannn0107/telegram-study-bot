package com.study.telegram.web.controller;

import com.study.telegram.web.services.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("post")
public class PostController {
    private static Logger logger = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private PostService postService;
}

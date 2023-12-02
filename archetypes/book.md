---
title: {{ replace .File.ContentBaseName "-" " " | title }}
date: {{ .Date }}
cover: {{ printf "%s.jpg" .File.ContentBaseName }}
author: {{ .Site.Params.author }}
description: |
   This is my book
isbn: 1234567891237
language: EN
pages: 79
words: 18k
link: 
amazon: 
patreon: 
kind: book
epub: 
free: false
genres:
  - short-story
authorsnote: |
    Tell something about this book your readers may want to hear about. If not, remove this section.
---

#!/bin/bash

if [ ! -d "../cherry-game.github.io/" ];then
    echo "dir not found."
else
    rm -rf ../cherry-game.github.io/404.html
    rm -rf ../cherry-game.github.io/assets
    rm -rf ../cherry-game.github.io/core
    rm -rf ../cherry-game.github.io/examples
    rm -rf ../cherry-game.github.io/guides
    rm -rf ../cherry-game.github.io/hashmap.json
    rm -rf ../cherry-game.github.io/index.html

    pnpm vitepress build
    cp -R .vitepress/dist/ ../cherry-game.github.io

    echo "ok"
fi
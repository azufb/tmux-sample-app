#!/bin/zsh

# ペインを上下に分割する
tmux splitw -v

# 上のペインを使う
tmux selectp -U

# バックエンドを起動する
# send-keysでキー入力。-tでペイン指定。
tmux send-keys 'cd backend' C-m
tmux send-keys 'npm start' C-m

# 下のペインを使う
tmux selectp -D

# フロントエンドを起動する
# send-keysでキー入力。-tでペイン指定。
tmux send-keys 'cd frontend' C-m
tmux send-keys 'npm start' C-m
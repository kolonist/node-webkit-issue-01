Test applicaton to illustrate node-webkit bug.

1. Run application.
2. Resize window - you should see width and height.
3. Close window. Width and height should be saved in localStorage.
4. Open it again. Height is bigger than before you closed the window.
5. Do steps 3 and 4 several times and you can see how window become higher and higher.

6. Open package.json and in line 17 change `"show": false` to `"show": true`.
7. Perform steps 1 to 5. You will see that nothing unexpecting happens.

Bug works on Archlinux, gnome-shell. Latest packages (2013-12-10).

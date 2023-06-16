---
title: "CaBER Video Processing Library ⭐"
date: "January 02 2022"
excerpt: "January 2022 - Wrote a code library which could be used to automatically characterize fluids from footage of CaBER experiments. This is helpful in studying the behavior of non-Newtonian fluids."
collection: portfolio
image: "/images/portfolio/caber_preview.png"
type: "computer"
---

<img src="/images/portfolio/caber_schematic.png" width="750"/>

<br>
**Tools:** Python, OpenCV, Machine learning, Fluid models, Equation fitting, Github

Code is available on Github [here](https://github.com/mburgjr/caber_image_processing).

CaBER experiments are used to study the surface behavior of non-Newtonian fluids in extensional flow. These experiments require stretching a fluid vertically as it thins until it eventually breaks. This process must be recorded and analyzed. However, post-processing of these recordings can be very time intensive.

To speed up the process, I wrote code that could analyze CaBER video recordings to extract information about the fluid. First, the automated process uses image processing and machine learning algorithms to locate the minimum radius of the fluid in each frame (shown below).

<img src="/images/portfolio/caber_process.png" width="700"/>

After images are analyzed, a graph of radius evolution over time is then fit to a set of non-Newtonian fluid models to characterize the liquid being studied. Fitting to these models means finding the optimal value for important parameters like apparent viscosity. Radius data for a sample fluid is plotted below.

<img src="/images/portfolio/caber_radius_plot.png" width="350"/>
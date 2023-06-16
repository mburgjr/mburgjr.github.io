---
title: "Hula Hooping Robot ⭐"
date: "December 02 2022"
excerpt: "December 2022 - Built a robot to learn more about the mechanical principles of hula hooping. Abstracted the system to two degrees of freedom and simulated trajectories before implementing on hardware."
collection: portfolio
image: "/images/portfolio/hooper.PNG"
type: "robotics"
---

<iframe width="560" height="315" src="https://youtube.com/embed/R8OzNzAQ-fU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>
**Tools:** Matlab simulation, Embedded controls, Contact dynamics

We built a hula hooping robot to study the dynamics of the phenomena is humans with an abstracted 2 DoF system. This was done for a course at MIT called “Bio-inspired Robotics”.

First, we created a 2D simulation that ignored gravity and imposed contact dynamics between the hoop and a waist contact point. This allowed us to see how a circular or spiral hip trajectory would affect the hoop’s movement. Most of my work in the project was focused on developing this simulation and low-level embedded controls. A gif of the simulation with contact force vectors is shown below. Here, the rigid red hip is following a spiral trajectory.

<img src="/images/portfolio/hooper_sim.gif" width="250"/>

Then, we built our full system to test hypotheses. This used a linkage system with a servo to control the radius of the waist contact point. A motor mounted at the base spun the whole top linkage system to spin the waist contact point.

We tested both circular and spiral hip trajectories. In the end, we found that spiral trajectories caused the fastest rise to steady state for the hoop.

The final poster made for this project can be accessed [here](/files/hooper_poster).

The project was nominated into [“MIT de Florez Awards Competition”](http://web.mit.edu/deflorez/) for mechanical engineering research!

A video was posted for the course showing some footage of our robot in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5jdG0S_QApo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
---
title: "Rock Skipping Robot"
date: "December 10 2022"
excerpt: "December 2022 - Developed a control architecture to pick-up a rock from a known location and skip it across water. The system was implemented and tested in a custom physics-based simulator."
collection: portfolio
image: "/images/portfolio/skipping.PNG"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/6xeFivpRMuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>
**Tools:** PyDrake, Physics-based simulation, Trajectory optimization, Dynamic modeling

Rock skipping is a very complex task that can be completed by most humans. My classmate and I wanted to see if we could get a robot to mimic this task in simulation. Then, we could rigorously test which parameters were most important for effective rock skipping. This was done as the final project for a graduate class at MIT called [“Robotic Manipulation”](https://manipulation.mit.edu).

To simulate, we imposed contact dynamics of rock skipping between a disk-shaped rock and simulated water surface. This was a great learning experience for real-2-sim robotics. Then, we commanded a pickup of the rock and ran trajectory optimization to throw the rock at a desired speed.

The system had some limitations and could not properly grip the rock for speeds greater than 25 m/s. In the future, we’d hope to create a specialized gripper for this task.

Awarded an <i>Outstanding Project Award</i> from the class staff!

The final paper for the project can be accessed [here](/files/skipping_paper.pdf).
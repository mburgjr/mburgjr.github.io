---
title: "Underactuated Skateboard Control System"
date: "May 10 2022"
excerpt: "May 2022 - Optimized dynamic trajectories to perform tricks on a simplified 2D skateboarding model. By controlling just the center of mass position of the rider, we can manipulate the board's movement."
collection: portfolio
image: "/images/portfolio/skateboard.png"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/TLPu6HTDCCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br>
**Tools:** PyDrake, Trajectory optimization, Non-linear programming (NLP), Dynamic modeling

Most real-world systems are not fully actuated. That is, they have fewer control variables than degrees of freedom. One example of this type of system is a skateboard. In the spring of 2022, I made a simplified skateboard system to track how a skater’s center of mass moves to perform tricks. This was done as the final project for a graduate class at MIT called [“Underactuated Robotics”](https://underactuated.mit.edu/).

The skater is abstracted to a point mass and fixed to the board, only able to control its relative angle. Dynamics were modeled in PyDrake and a nonlinear trajectory optimization ran to find the optimal path of angles to perform a simple jump (or “ollie”) at a specified maximum height.

The system performed well and displayed that it was feasible to execute tricks just by moving center of mass angle. In the future, I would like to expand the number of tricks performed and test this control schema on a real system. All materials for this project are available below:

The final paper for the project can be accessed [here](/files/skateboard_paper.pdf).

Code for the project can be accessed [here](https://deepnote.com/workspace/michael-burgess-b67c2881-5871-430a-b606-dad33dbda088/project/6832-Final-Project-Skateboard-Jump-7fac7dad-0438-4795-8446-c54cd54f4787/%2Fnotebook.ipynb).
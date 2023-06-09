---
title: "Underactuated Skateboard Control System"
excerpt: "Short description of portfolio item number 1"
collection: portfolio
image: "/images/portfolio/skateboard.png"
---

**Tools:** PyDrake, Non-linear programming (NLP), Dynamic modeling

Most real-world systems are not fully actuated. That is, they have fewer control variables than degrees of freedom. One example of this type of system is a skateboard. In the spring of 2022, I made a simplified skateboard system to track how a skater’s center of mass moves to perform tricks. This was done as the final project for a graduate class at MIT called 6.832 “Underactuated Robotics”.
The skater is abstracted to a point mass and fixed to the board, only able to control its relative angle. Dynamics were modeled in PyDrake and a nonlinear trajectory optimization ran to find the optimal path of angles to perform a simple jump (or “ollie”).
The system performed well and displayed that it was feasible to execute tricks just by moving center of mass angle. In the future, I would like to expand the number of tricks performed and test this control schema on a real system. All materials for this project are available on the next slide.
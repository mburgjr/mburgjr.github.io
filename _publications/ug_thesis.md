---
title: "Decoupled Kinodynamic Planning for a Quadruped Robot over Complex Terrain"
collection: publications
permalink: /publication/ug_thesis
excerpt: ''
date: 2023-05-12
venue: 'MIT dSpace'
paperurl: 'http://mburgjr.github.io/files/ug_thesis.pdf'
citation: 'Burgess, Michael. 2023. "Decoupled Kinodynamic Planning for a Quadruped Robot over Complex Terrain." <i>MIT dSpace</i>.'
image: '/images/ug_thesis.png'
---

[Accessible here.](http://mburgjr.github.io/files/ug_thesis.pdf)

**Abstract:** High-level planning for hybrid-dynamic, legged systems can be challenging due to a need to simultaneously satisfy kinematic and dynamic constraints. Previously developed sampling-based approaches can rapidly generate plans that satisfy kinematic constraints, but often lead to dynamically infeasible trajectories. On the other hand, traditional optimization-based approaches can reliably produce feasible trajectories, but are computationally inefficient. In this work, we leverage the strengths of these popular techniques to develop an advantageous novel motion planning formulation. Our methodology decouples kinematic and dynamic constraints to quickly generate emergent, feasible trajectories for legged systems across complex terrains. We decouple constraints into two separate processes. First, we rapidly sample footstep positions across a given terrain using an RRT-like search algorithm. This allows us to satisfy kinematic constraints without committing to a full state trajectory which could be dynamically infeasible, as is a common failure of other sampling-based approaches. Then, we can solve an optimization problem to generate a dynamically feasible trajectory using these contact positions. Since contact locations have already been determined, our optimization problem has a reduced decision space and does not require inconvenient complementarity constraints. As a result, this optimization can be solved more efficiently than traditional trajectory optimization formulations. Implemented in simulation for a 2D quadruped robot, our novel formulation is shown to generate trajectories in less than 15% of the computation time needed for traditional, coupled planning methods. Furthermore, experiments demonstrate that our method maintains a consistent average solve time across sets of randomly generated terrains, regardless of their complexity.
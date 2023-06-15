---
title: "Markforged: Part Packing"
date: "August 01 2022"
excerpt: "August 2022 - Developed a geometric algorithm to optimize the packing space on 3D printing build plate. Using simulated annealing approach, could fit 15+% more parts than previous method."
collection: portfolio
image: "/images/portfolio/packing.png"
---

<img src="/images/portfolio/packing_improvement.png" width="720"/>

<br>
**Tools:** TypeScript, React, Simulated annealing, Geometric data structures

In order to maximize the capabilities of a 3D printer, a user would have to fill up the print bed as much as possible. This is not an easy problem to solve. Packing problems are NP hard (like Tetris) and require an approximate solution in practice.

I addressed this problem during time as a Software Engineering Intern at [Markforged](https://markforged.com/). At the start of my internship, the company’s part packing algorithm was a brute force search from the center of the print bed. Parts were placed as they were added and packing was not re-evaluated when the number of desired parts increased. This led to a lot of unused printer space (as seen above).

To fix this, I was tasked with creating a fast offline alternative which could optimize the number of parts on the print bed. I implemented a randomized, simulated annealing based approach that swapped and shifted parts to minimize their bounding area. Collisions were determined using a BVH representation of 2D part shapes. A heuristic was minimized such that no parts collided.

The new algorithm showed great improvement and could fit 15+% more parts than the previous approach. It worked best on highly concave parts (like cats).
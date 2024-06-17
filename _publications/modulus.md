---
title: "Learning Object Compliance via Young's Modulus from Single Grasps with Camera-Based Tactile Sensors"
collection: publications
permalink: /publication/modulus
excerpt: ''
date: 2024-06-06
venue: 'Under Review'
paperurl: ''
citation: 'Currently under review.'
image: '/images/publications/modulus.png'
---

<!-- [Accessible here.](https://dspace.mit.edu/handle/1721.1/151851) -->

Currently under review.

Open-source code available on [GitHub](https://github.com/GelSight-lab/TactileEstimateModulus). Dataset available on [HuggingFace](https://huggingface.co/datasets/mburgjr/GelSight-YoungsModulus).

**Abstract:** Compliance is a useful parametrization of tactile information that humans often utilize in manipulation tasks. It can be used to inform low-level contact-rich actions or characterize objects at a high-level. In robotic manipulation, existing approaches to estimate compliance have struggled to generalize across object shape and material. Using camera-based tactile sensors, we present a novel approach to parametrize compliance through Young's modulus (E). We evaluate our method over a novel dataset of 285 common objects, including a wide array of shapes and materials with Young's moduli ranging from 5.0 kPa to 250 GPa. Data is collected over automated parallel grasps of each object. Combining analytical and data-driven approaches, we develop a hybrid system using a multi-tower neural network to analyze a sequence of tactile images from grasping. This system is shown to estimate the Young's modulus of unseen objects within an order of magnitude at 74.2% accuracy across our dataset. This is a drastic improvement over a purely analytical baseline, which exhibits only 28.9% accuracy. Importantly, this estimation system performs irrespective of object geometry and demonstrates robustness across object materials. Thus, it could be applied in a general robotic manipulation setting to characterize unknown objects and inform decision-making, for instance to sort produce by ripeness.

<img src="/images/publications/modulus_teaser.png" width="600"/>

### Banana Demo
<video width="600" controls>
  <source src="/images/publications/ball_demo.mp4" type="video/mp4">
</video>

### Ball Demo
<video width="600" controls>
  <source src="/images/publications/ball_demo.mp4" type="video/mp4">
</video>
---
title: "Learning Object Compliance via Young's Modulus from Single Grasps with Camera-Based Tactile Sensors"
collection: publications
permalink: /publication/modulus
excerpt: ''
date: 2024-06-06
venue: 'arXiv'
paperurl: 'https://arxiv.org/abs/2406.15304'
citation: 'M. Burgess, "Learning Object Compliance via Young's ". <i>arXiv</i>. 2024.'
image: '/images/publications/modulus_preview.png'
---

Currently under review.

Pre-print accessible [here](https://arxiv.org/abs/2406.15304).

Open-source code available on [GitHub](https://github.com/GelSight-lab/TactileEstimateModulus). Dataset available on [HuggingFace](https://huggingface.co/datasets/mburgjr/GelSight-YoungsModulus).

**Abstract:** Compliance is a useful parametrization of tactile information that humans often utilize in manipulation tasks. It can be used to inform low-level contact-rich actions or characterize objects at a high-level. In robotic manipulation, existing approaches to estimate compliance have struggled to generalize across object shape and material. Using camera-based tactile sensors, we present a novel approach to parametrize compliance through Young's modulus (E). We evaluate our method over a novel dataset of 285 common objects, including a wide array of shapes and materials with Young's moduli ranging from 5.0 kPa to 250 GPa. Data is collected over automated parallel grasps of each object. Combining analytical and data-driven approaches, we develop a hybrid system using a multi-tower neural network to analyze a sequence of tactile images from grasping. This system is shown to estimate the Young's modulus of unseen objects within an order of magnitude at 74.2% accuracy across our dataset. This is a drastic improvement over a purely analytical baseline, which exhibits only 28.9% accuracy. Importantly, this estimation system performs irrespective of object geometry and demonstrates robustness across object materials. Thus, it could be applied in a general robotic manipulation setting to characterize unknown objects and inform decision-making, for instance to sort produce by ripeness.

<img src="/images/publications/modulus_teaser.png" width="700"/>

### Banana Demo

We apply our estimation system to assess the compliance of various bananas in a manipulation scene. We can use a measure of compliance to discern whether bananas are real or fake and how ripe they may be.

<video width="500" controls>
  <source src="/images/publications/banana_demo.mp4" type="video/mp4">
</video>

### Ball Demo

More generally, we can apply our estimation system to assess the compliance of general objects, in this case balls. We can use a measure of compliance to create safe grasping policies and inform high-level decision-making.

<video width="500" controls>
  <source src="/images/publications/ball_demo.mp4" type="video/mp4">
</video>

<!-- ---
title: "Learning Object Compliance via Young's Modulus from Single Grasps with Camera-Based Tactile Sensors"
collection: publications
permalink: /publication/modulus
excerpt: ''
date: 2024-06-06
venue: 'Currently under review'
paperurl: 'https://arxiv.org/abs/2406.15304'
citation: 'M. Burgess, “Learning Object Compliance via Young's Modulus from Single Grasps with Camera-Based Tactile Sensors”, <i>	arXiv</i>. 2024.'
image: '/images/publications/modulus_preview.png'
---

Currently under review.

Pre-print accessible [here](https://arxiv.org/abs/2406.15304).

Open-source code available on [GitHub](https://github.com/GelSight-lab/TactileEstimateModulus). Dataset available on [HuggingFace](https://huggingface.co/datasets/mburgjr/GelSight-YoungsModulus).

**Abstract:** Compliance is a useful parametrization of tactile information that humans often utilize in manipulation tasks. It can be used to inform low-level contact-rich actions or characterize objects at a high-level. In robotic manipulation, existing approaches to estimate compliance have struggled to generalize across object shape and material. Using camera-based tactile sensors, we present a novel approach to parametrize compliance through Young's modulus (E). We evaluate our method over a novel dataset of 285 common objects, including a wide array of shapes and materials with Young's moduli ranging from 5.0 kPa to 250 GPa. Data is collected over automated parallel grasps of each object. Combining analytical and data-driven approaches, we develop a hybrid system using a multi-tower neural network to analyze a sequence of tactile images from grasping. This system is shown to estimate the Young's modulus of unseen objects within an order of magnitude at 74.2% accuracy across our dataset. This is a drastic improvement over a purely analytical baseline, which exhibits only 28.9% accuracy. Importantly, this estimation system performs irrespective of object geometry and demonstrates robustness across object materials. Thus, it could be applied in a general robotic manipulation setting to characterize unknown objects and inform decision-making, for instance to sort produce by ripeness.

<img src="/images/publications/modulus_teaser.png" width="700"/>

### Banana Demo

We apply our estimation system to assess the compliance of various bananas in a manipulation scene. We can use a measure of compliance to discern whether bananas are real or fake and how ripe they may be.

<video width="500" controls>
  <source src="/images/publications/banana_demo.mp4" type="video/mp4">
</video>

### Ball Demo

More generally, we can apply our estimation system to assess the compliance of general objects, in this case balls. We can use a measure of compliance to create safe grasping policies and inform high-level decision-making.

<video width="500" controls>
  <source src="/images/publications/ball_demo.mp4" type="video/mp4">
</video> -->
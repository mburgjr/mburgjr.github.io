---
title: "NASA: Machine Learning for Prediction of Flow Transition"
date: "May 01 2021"
excerpt: "May 2021 - Tested and refined a machine learning architecture that could be used to predict the onset of turbulence across an airfoil."
collection: portfolio
image: "/images/portfolio/nasa.png"
---
<img src="/images/portfolio/nasa_architecture.png" width="700"/>

<br>
**Tools:** Python, CNN, Machine learning, Fluid models

Turbulence leads to less efficient flight. Good airfoil designs theoretically maximize the amount of laminar flow across the wing. Machine learning can be used to predict where a flow becomes turbulent. I tackled this problem in the Spring of 2021 during an internship at NASA Langley.

<img src="/images/portfolio/nasa_turbulence.png" width="400"/>

During my internship, I refined a machine learning architecture to predict the amplification of turbulence along an airfoil across a range of frequencies. The model takes a snapshot of a fluid boundary layer and outputs the amplification rate (σ) of flow instabilities. Amplification rate (σ) is used to find N-factor for given frequencies. N-factor estimates the instability of a flow. The maximum over these curves can be used to predict the onset of turbulence.

<img src="/images/portfolio/nasa.png" width="350"/>

This proved to be a robust method of prediction. At the end of my internship, we began implementing the model into a CFD solver to give real-time feedback to designers. As shown below, the model can well approximate curves from the dataset.

<img src="/images/portfolio/nasa_prediction.png" width="350"/>